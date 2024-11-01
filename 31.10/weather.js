const axios = require('axios');

const API_KEY = 'f3c98864a2d84c1abf4111714243110';
const country = 'Colombia';

async function getForecastData() {
    const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
        params: {
            key: API_KEY,
            q: country,
            days: 30, // Запрашиваем прогноз на 30 дней
        }
    });
    console.log(response.data);
    return response.data;
}

async function findBestMonth() {
    const data = await getForecastData();

    const monthlyWeather = {};

    data.forecast.forecastday.forEach(day => {
        const month = day.date.split('-')[1]; // Получаем месяц из даты
        const avgTemp = day.day.avgtemp_c;
        const totalPrecipitation = day.day.totalprecip_mm;
        const isSunny = day.day.condition.text.includes('Sunny');

        if (!monthlyWeather[month]) {
            monthlyWeather[month] = {
                avgTemp: 0,
                totalPrecipitation: 0,
                sunnyDays: 0,
                count: 0
            };
        }

        monthlyWeather[month].avgTemp += avgTemp;
        monthlyWeather[month].totalPrecipitation += totalPrecipitation;
        monthlyWeather[month].sunnyDays += isSunny ? 1 : 0;
        monthlyWeather[month].count += 1;
    });

    let bestMonth = null;
    let bestScore = -Infinity;

    Object.entries(monthlyWeather).forEach(([month, stats]) => {
        const avgTemp = stats.avgTemp / stats.count;
        const totalPrecipitation = stats.totalPrecipitation;
        const sunnyDays = stats.sunnyDays;

        // Пример расчета балла (можно настроить под свои нужды)
        const score = (avgTemp * 2) + (sunnyDays * 3) - totalPrecipitation;

        if (score > bestScore) {
            bestScore = score;
            bestMonth = month;
        }
    });

    console.log(`Лучший месяц для путешествия в Колумбию: ${bestMonth}`);
}

findBestMonth().catch(error => {
    console.error('Ошибка при получении данных:', error);
});
