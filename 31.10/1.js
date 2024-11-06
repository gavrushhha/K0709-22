const axios = require('axios');

const API_KEY = 'cccfbb5eafdf48a39bf145336240411';
const COUNTRY = 'South Korea';

async function getWeatherData(year, month, day) {
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const url = `http://api.worldweatheronline.com/premium/v1/past-weather.ashx`;

    try {
        const response = await axios.get(url, {
            params: {
                key: API_KEY,
                q: COUNTRY,
                date: date,
                format: 'json'
            }
        });
        const data = response.data.data.weather[0];
        return {
            date: data.date,
            maxTemp: parseFloat(data.maxtempC),
            minTemp: parseFloat(data.mintempC),
            precipitation: data.hourly.reduce((acc, h) => acc + parseFloat(h.precipMM), 0) / data.hourly.length,
            avgHumidity: data.hourly.reduce((acc, h) => acc + parseInt(h.humidity), 0) / data.hourly.length,
            description: data.hourly[0].weatherDesc[0].value
        };
    } catch (error) {
        console.error(`Error fetching for ${date}:`, error);
        return null;
    }
}

async function getAverageWeatherData(year, month) {
    const data10 = await getWeatherData(year, month, 10);
    const data20 = await getWeatherData(year, month, 20);

    if (!data10 || !data20) return null;

    return {
        month,
        maxTemp: (data10.maxTemp + data20.maxTemp) / 2,
        minTemp: (data10.minTemp + data20.minTemp) / 2,
        precipitation: (data10.precipitation + data20.precipitation) / 2,
        avgHumidity: (data10.avgHumidity + data20.avgHumidity) / 2,
        description: data10.description
    };
}

async function findBestMonth() {
    const weatherData = [];

    for (let month = 1; month <= 12; month++) {
        const avgData = await getAverageWeatherData(2023, month);
        if (avgData) {
            weatherData.push(avgData);
            console.log(`Месяц: ${avgData.month}, Средняя макс. температура: ${avgData.maxTemp}°C, Средняя мин. температура: ${avgData.minTemp}°C, Осадки: ${avgData.precipitation} мм, Средняя влажность: ${avgData.avgHumidity}%, Описание: ${avgData.description}`);
        }
    }

    const idealMonths = weatherData.filter(month => 
        month.maxTemp >= 20 && month.maxTemp <= 30 && month.precipitation < 5
    );

    console.log("\nПодходящие месяцы для путешествия:");
    idealMonths.forEach(month => {
        console.log(`Месяц: ${month.month}, Средняя макс. температура: ${month.maxTemp}°C, Осадки: ${month.precipitation} мм, Средняя влажность: ${month.avgHumidity}%`);
    });

    if (idealMonths.length === 0) {
        console.log('Нет подходящего месяца для путешествия согласно заданным критериям.');
        return;
    }

    const bestMonth = idealMonths.reduce((best, current) => 
        (current.avgHumidity < best.avgHumidity ? current : best)
    );

    console.log(`\nЛучший месяц для путешествия: ${bestMonth.month} (${bestMonth.description})`);
}

findBestMonth();
