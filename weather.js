import axios from 'axios';

const WEATHER_API_URL = 'https://api.weatherapi.com/v1/future.json';
const API_KEY = '33460cf7648b4abab1f101924240611';
const DESTINATION = 'Mexico';

const targetTemp = 28;
const targetHumidity = 80;

function generateFutureDates() {
    const dates = [];
    const currentDate = new Date();

    for (let i = 1; i <= 10; i++) {
        const futureMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        const year = futureMonth.getFullYear();
        const month = String(futureMonth.getMonth() + 1).padStart(2, '0');
        dates.push(`${year}-${month}-01`);
    }

    return dates;
}

async function fetchWeatherInfo() {
    const weatherInfo = [];

    for (let date of generateFutureDates()) {
        try {
            const response = await axios.get(WEATHER_API_URL, {
                params: {
                    key: API_KEY,
                    q: DESTINATION,
                    dt: date,
                }
            });

            const dailyData = response.data.forecast.forecastday[0].day;
            const averageTemp = dailyData.avgtemp_c;
            const averageHumidity = dailyData.avghumidity;

            weatherInfo.push([date, averageTemp, averageHumidity]);
        } catch (error) {
            console.error(`Не удалось получить данные для ${date}:`, error);
        }
    }

    return weatherInfo;
}

async function determineOptimalMonth() {
    const monthlyData = await fetchWeatherInfo();
    let optimalMonth = null;
    let optimalScore = Infinity;

    for (let [date, avgTemp, avgHumidity] of monthlyData) {
        const tempDeviation = Math.abs(avgTemp - targetTemp);
        const humidityDeviation = Math.abs(avgHumidity - targetHumidity);
        const monthScore = tempDeviation + humidityDeviation;

        if (monthScore < optimalScore) {
            optimalScore = monthScore;
            optimalMonth = [date, avgTemp, avgHumidity];
        }
    }

    return optimalMonth;
}

async function start() {
    const bestMonth = await determineOptimalMonth();
    if (bestMonth) {
        console.log("Оптимальный месяц для поездки:", bestMonth[0]);
        console.log("Ожидаемая температура:", bestMonth[1], "°C");
        console.log("Ожидаемая влажность:", bestMonth[2], "%");
    } else {
        console.log("Нет доступных данных для определения лучшего месяца.");
    }
}

start().catch(console.error);
