const axios = require('axios');

const API_KEY = '5ad41eb2385e4947bdb104726243110';
const city = 'Оттава'; 
const BASE_URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?q=${city}&key=${API_KEY}&format=json&fx=no&cc=no&mca=yes`;
const idealTemp = 20;
const idealHumidity = 65;

async function getWeatherData(city) {
    try {
        let weatherData = [];

        const response = await axios.get(BASE_URL);
        const monthlyWeatherData = response.data.data.ClimateAverages[0].month;
        
        console.log(monthlyWeatherData)
        for (const monthWeatherData of monthlyWeatherData) {
            const avgTemp = (Number(monthWeatherData.absMaxTemp) + Number(monthWeatherData.avgMinTemp)) / 2;
            weatherData.push([monthWeatherData.name, avgTemp, monthWeatherData.avgDailyRainfall]);
        }

        return weatherData;
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
    }
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
    console.log("Best month:", bestMonth[0]);
    console.log("Average temperature:", bestMonth[1], "°C");
    console.log("Average humadity:", bestMonth[2], "%");

}

main().catch(console.error);
