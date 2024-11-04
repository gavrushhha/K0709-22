const axios = require('axios');

const API_KEY = 'fdcd64a8d3f64f0382183538240411';
const COUNTRY = 'Colombia';

async function getWeatherData(country, date) {
    try {
        const response = await axios.get('https://api.worldweatheronline.com/premium/v1/past-weather.ashx', {
            params: {
                key: API_KEY,
                q: country,
                date: date,
                format: 'json'
            }
        });
        return response.data.data.weather[0];
    } catch (error) {
        console.error(`Ошибка при запросе данных за ${date}: ${error.message}`);
        return null;
    }
}

async function findBestTravelMonth(country) {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    let bestMonth = null;
    let bestScore = -Infinity;

    for (const month of months) {
        const date1 = `2023-${month.toString().padStart(2, '0')}-01`;
        const date2 = `2023-${month.toString().padStart(2, '0')}-15`;

        // Параллельные запросы на 1 и 15 числа месяца
        const [data1, data2] = await Promise.all([
            getWeatherData(country, date1),
            getWeatherData(country, date2)
        ]);

        if (!data1 || !data2) continue;

        // Средние значения параметров по двум датам
        const avgTemp = (parseFloat(data1.avgtempC) + parseFloat(data2.avgtempC)) / 2;
        const avgHumidity = (data1.hourly.reduce((acc, h) => acc + parseInt(h.humidity), 0) / data1.hourly.length +
            data2.hourly.reduce((acc, h) => acc + parseInt(h.humidity), 0) / data2.hourly.length) / 2;
        const avgPrecipitation = (data1.hourly.reduce((acc, h) => acc + parseFloat(h.precipMM), 0) / data1.hourly.length +
            data2.hourly.reduce((acc, h) => acc + parseFloat(h.precipMM), 0) / data2.hourly.length) / 2;

        // Расчет "оценки условий" для месяца
        const tempScore = Math.max(0, 30 - Math.abs(25 - avgTemp));
        const humidityScore = Math.max(0, 50 - Math.abs(50 - avgHumidity));
        const precipitationScore = Math.max(0, 50 - (avgPrecipitation * 100));

        const monthScore = tempScore + humidityScore + precipitationScore;
        console.log(`Месяц ${month}: Средняя температура: ${avgTemp}°C, Средняя влажность: ${avgHumidity}%, Средние осадки: ${avgPrecipitation} мм, Оценка: ${monthScore}`);

        if (monthScore > bestScore) {
            bestScore = monthScore;
            bestMonth = month;
        }
    }

    return bestMonth;
}

findBestTravelMonth(COUNTRY).then(bestMonth => {
    console.log(`Наиболее подходящий месяц для поездки в Колумбию: ${bestMonth}`);
}).catch(error => {
    console.error('Ошибка при поиске лучшего месяца:', error.message);
});
