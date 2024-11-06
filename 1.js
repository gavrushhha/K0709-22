const axios = require('axios');

const COUNTRY = 'Italy';
const WEATHER_API_1 = 'https://api.weatherapi.com/v1/future.json';
const API_KEY_1 = '03499ea3f2494647bf3104010243110';
const idealTemp = 20;
const idealHumidity = 65;

function getNextDates() {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 10; i++) {
        const futureDate = new Date(today.getFullYear(), today.getMonth() + i + 1, 1);
        const year = futureDate.getFullYear();
        const month = futureDate.getMonth() + 1;
        const day = futureDate.getDate();

        dates.push(`${year}-${month}-${day}`);
    }

    return dates;
}

async function getWeatherData() {
    let weatherData = []

    for (let date of getNextDates()) {
        let response = await axios.get(WEATHER_API_1, {
            params: {
                key: API_KEY_1,
                q: COUNTRY,
                dt: date,
            }
        });

        let forecast = response.data.forecast.forecastday[0].day;
        let avgTemp = forecast.avgtemp_c;
        let avgHumidity = forecast.avghumidity;

        weatherData.push([date, avgTemp, avgHumidity]);
    }

    return weatherData;
}

async function findBestWeatherMonth() {
    let data = await getWeatherData()
    let bestMonthData = null;
    let bestScore = Infinity;

    for (let monthData of data) {
        let [date, avgTemp, avgHumidity] = monthData

        let tempDifference = Math.abs(avgTemp - idealTemp);
        let humidityDifference = Math.abs(avgHumidity - idealHumidity);

        let score = tempDifference + humidityDifference;

        if (score < bestScore) {
            bestScore = score;
            bestMonthData = [date, avgTemp, avgHumidity];
        }
    }

    return bestMonthData;
}

async function main() {
    const bestMonth = await findBestWeatherMonth();
    console.log("Лучший месяц:", bestMonth[0]);
    console.log("Средняя температура:", bestMonth[1], "°C");
    console.log("Средняя влажность:", bestMonth[2], "%");

}

main().catch(console.error);
