require('dotenv').config();

// install dotenv in terminal: npm install dotenv
// for install npm: sudo apt install npm

const WEATHER_API_KEY = process.env.WEATHER_API_KEY; //YOUR API KEY in file .env or use: const WEATHER_API_KEY = 'YOUR_API_KEY'
const COUNTRY = 'Norway';
const BASE_WEATHER_API_URL = 'http://api.weatherapi.com/v1/history.json';

const today = new Date();

const currentDate = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const DT_MONTHS = [];
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

for (let i = 1; i <= 12; i++) {
    let monthDays = daysInMonth(currentYear, i);
    for (let j = 1; j <= monthDays; j++) {
        let month = i < 10 ? `0${i}` : `${i}`;
        let day = j < 10 ? `0${j}` : `${j}`;
        let year = (i < currentMonth || (i === currentMonth && j <= currentDate)) ? currentYear : currentYear - 1;
        DT_MONTHS.push(`${year}-${month}-${day}`);
    }
}

const DAYS = {};

async function fetchWeatherData() {
    for (let dt of DT_MONTHS) {
        const WEATHER_API_URL = `${BASE_WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${COUNTRY}&dt=${dt}`;

        try {
            const response = await fetch(WEATHER_API_URL);
            const data = await response.json();

            if (data.forecast && data.forecast.forecastday.length > 0) {
                let avgTemp = data.forecast.forecastday[0].day.avgtemp_c;
                let avgHumidity = data.forecast.forecastday[0].day.avghumidity;
                let condition = data.forecast.forecastday[0].day.condition.text;
                DAYS[dt] = [avgTemp, avgHumidity, condition];
            } else {
                console.log(`Нет данных для даты: ${dt}`);
            }
        } catch (error) {
            console.error(`Ошибка при получении данных для даты ${dt}:`, error);
        }
    }
    calculateMonthlyStats();
}

function calculateMonthlyStats() {
    let MONTHS_STATS = Array(12).fill().map(() => [0, 0, 0, {}]);

    for (let dt in DAYS) {
        const dateParts = dt.split('-');
        const monthIndex = parseInt(dateParts[1]) - 1;

        MONTHS_STATS[monthIndex][0] += DAYS[dt][0];
        MONTHS_STATS[monthIndex][1] += DAYS[dt][1];
        MONTHS_STATS[monthIndex][2] += 1;

        const condition = DAYS[dt][2];
        if (!MONTHS_STATS[monthIndex][3][condition]) {
            MONTHS_STATS[monthIndex][3][condition] = 0;
        }
        MONTHS_STATS[monthIndex][3][condition] += 1;
    }

    for (let i = 0; i < MONTHS_STATS.length; i++) {
        if (MONTHS_STATS[i][2] > 0) {
            MONTHS_STATS[i][0] /= MONTHS_STATS[i][2];
            MONTHS_STATS[i][1] /= MONTHS_STATS[i][2];

            let mostOftenCondition = '';
            let maxCount = 0;
            for (const condition in MONTHS_STATS[i][3]) {
                if (MONTHS_STATS[i][3][condition] > maxCount) {
                    maxCount = MONTHS_STATS[i][3][condition];
                    mostOftenCondition = condition;
                }
            }
            MONTHS_STATS[i].push(mostOftenCondition);
        }
    }
    findBestWeatherConditions(MONTHS_STATS);
}


function findBestWeatherConditions(monthsStats) {
    let bestMonthIndex = -1;
    let bestTemperature = -Infinity;
    let bestHumidity = Infinity;
    let bestCondition = '';

    for (let i = 0; i < monthsStats.length; i++) {
        const [avgTemp, avgHumidity, daysCount, _, mostFrequentCondition] = monthsStats[i];

        if (daysCount > 0) {
            if (avgTemp > bestTemperature || 
                (avgTemp === bestTemperature && avgHumidity < bestHumidity)) {
                bestTemperature = avgTemp;
                bestHumidity = avgHumidity;
                bestMonthIndex = i;
                bestCondition = mostFrequentCondition;
            }
        }
    }

    if (bestMonthIndex !== -1) {
        console.log(`Лучший месяц: ${bestMonthIndex + 1}, Средняя температура: ${bestTemperature.toFixed(2)} °C, Средняя влажность: ${bestHumidity.toFixed(2)}%, Наиболее частое условие: ${bestCondition}`);
    } else {
        console.log('Нет доступных данных для определения лучших погодных условий.');
    }
}

fetchWeatherData();
