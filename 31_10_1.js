
// const WEATHER_APIS = [
//     { url: `https://api.openweathermap.org/data/3.0/forecast`, key: `d52645c8877b641a9a2e4e0c7b1c4f6f` },
//     { url: `https://api.weatherapi.com/v1/forecast.json`, key: `1abce71204b045d4b57102042243110` },
// 89498453030d470c89bf20d923e01d0e

const axios = require(`axios`);

// API configurations
const WEATHER_API = {
    url: `https://api.weatherapi.com/v1/forecast.json`, 
    key: `1abce71204b045d4b57102042243110`
};

const WEATHERBIT_API = {
    url: `https://api.weatherbit.io/v2.0/forecast/daily`, 
    key: `89498453030d470c89bf20d923e01d0e`
};

async function fetchWeatherAPI(city, days) {
    try {
        const params = {
            key: WEATHER_API.key,
            q: city,
            days: days
        };

        const response = await axios.get(WEATHER_API.url, { params });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from WeatherAPI: ${error.message}`);
        return null; 
    }
}

async function fetchWeatherbitAPI(lat, lon, days) {
    try {
        const params = {
            key: WEATHERBIT_API.key,
            lat: lat,
            lon: lon,
            days: days
        };

        const response = await axios.get(WEATHERBIT_API.url, { params });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from Weatherbit API: ${error.message}`);
        return null; 
    }
}


async function findBestTravelMonth(city, lat, lon) {
    const monthlyScores = [];

    for (let month = 1; month <= 12; month++) {
        const weatherAPIData = await fetchWeatherAPI(city, 10); 
        const weatherbitData = await fetchWeatherbitAPI(lat, lon, 10); 

        if (!weatherAPIData && !weatherbitData) continue;

        let totalTemp = 0;
        let totalRainfall = 0;
        let sunnyDays = 0;
        let count = 0;

        if (weatherAPIData && weatherAPIData.forecast) {
            weatherAPIData.forecast.forecastday.forEach(day => {
                const date = new Date(day.date);
                if (date.getMonth() + 1 === month) { 
                    totalTemp += day.day.avgtemp_c; 
                    totalRainfall += day.day.totalprecip_mm || 0; 
                    sunnyDays += day.day.condition.text.includes(`Sunny`) ? 1 : 0; 
                    count++;
                }
            });
        }

        if (weatherbitData && weatherbitData.data) {
            weatherbitData.data.forEach(day => {
                const date = new Date(day.datetime);
                if (date.getMonth() + 1 === month) { 
                    totalTemp += day.temp; 
                    totalRainfall += day.precip; 
                    sunnyDays += day.weather.description.includes(`Clear`) ? 1 : 0; 
                    count++;
                }
            });
        }

        if (count > 0) {
            const avgTemp = totalTemp / count;
            const avgRainfall = totalRainfall / count;

            monthlyScores.push({
                month,
                score: (avgTemp * 2) - avgRainfall + sunnyDays * 10 
            });
        }
    }

    monthlyScores.sort((a, b) => b.score - a.score);
    const bestMonth = monthlyScores[0];
    console.log(`Best month to travel to ${city} - ${bestMonth.month}`);
}

findBestTravelMonth(`Melbourne`, 37.8136, 144.9631);
