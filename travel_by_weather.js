
const axios = require('axios');

const API_WEATHER = {
    endpoint: 'https://api.weatherapi.com/v1/forecast.json',
    apiKey: '20f69da1a51b4a9ba52152531243110'
};

const API_YANDEX = {
    endpoint: 'https://api.yandex.com/weather',
    apiKey: 'e8e0db84-c2f0-471d-bca7-9778d0460707'
};

async function retrieveWeatherAPI(city, forecastDays) {
    try {
        const queryParams = {
            key: API_WEATHER.apiKey,
            q: city,
            days: forecastDays
        };
        const weatherResponse = await axios.get(API_WEATHER.endpoint, { params: queryParams });
        return weatherResponse.data;
    } catch (err) {
        console.error(`Error retrieving WeatherAPI data: ${err.message}`);
        return null;
    }
}

async function retrieveYandexAPI(latitude, longitude, forecastDays) {
    try {
        const queryParams = {
            key: API_YANDEX.apiKey,
            lat: latitude,
            lon: longitude,
            days: forecastDays
        };
        const yandexResponse = await axios.get(API_YANDEX.endpoint, { params: queryParams });
        return yandexResponse.data;
    } catch (err) {
        console.error(`Error retrieving Yandex API data: ${err.message}`);
        return null;
    }
}

async function optimalTravelMonth(destination, latitude, longitude) {
    const monthlyRatings = [];

    for (let mth = 1; mth <= 12; mth++) {
        const weatherAPIInfo = await retrieveWeatherAPI(destination, 10);
        const yandexAPIInfo = await retrieveYandexAPI(latitude, longitude, 10);
        if (!weatherAPIInfo && !yandexAPIInfo) continue;
        let aggregateTemp = 0;
        let aggregateRain = 0;
        let clearDays = 0;
        let dataPoints = 0;
        if (weatherAPIInfo && weatherAPIInfo.forecast) {
            weatherAPIInfo.forecast.forecastday.forEach((day) => {
                const forecastDate = new Date(day.date);
                if (forecastDate.getMonth() + 1 === mth) {
                    aggregateTemp += day.day.avgtemp_c;
                    aggregateRain += day.day.totalprecip_mm || 0;
                    clearDays += day.day.condition.text.includes('Sunny') ? 1 : 0;
                    dataPoints++;
                }
            });
        }
        if (yandexAPIInfo && yandexAPIInfo.data) {
            yandexAPIInfo.data.forEach((day) => {
                const forecastDate = new Date(day.datetime);
                if (forecastDate.getMonth() + 1 === mth) {
                    aggregateTemp += day.temp;
                    aggregateRain += day.precip;
                    clearDays += day.weather.description.includes('Clear') ? 1 : 0;
                    dataPoints++;
                }
            });
        }
        if (dataPoints > 0) {
            const averageTemp = aggregateTemp / dataPoints;
            const averageRain = aggregateRain / dataPoints;
            monthlyRatings.push({
                month: mth,
                rating: averageTemp * 2 - averageRain + clearDays * 10
            });
        }
    }
    monthlyRatings.sort((a, b) => b.rating - a.rating);
    const topMonth = monthlyRatings[0];
    console.log(`Best month for visiting ${destination} - ${topMonth.month}`);
}

optimalTravelMonth('Saudi Arabia', 24.7136, 46.6753);
