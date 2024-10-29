async function* fetchData(cities) {
    for (const city of cities) {
        console.log(`Query for get weather data in city ${city}`)
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2fbffbcb42f04a81ae2618112429....&q=${city}`)
        const data = await response.json()
        yield data
    }
}

const cities = ['Москва', 'Самара', 'Сочи'];

(async () => {
    const weathers = fetchData(cities)
    for await (const weather of weathers) {
        console.log(weather)
    }
})()