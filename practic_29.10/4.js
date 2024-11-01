async function* fetchData(cities) {
    for (let city of cities) {
        console.log("Запрос на погоду в городе " + city);
        const response = await await fetch(``);
        const data = await response.json();
        yield data;
    }
}

const cities = ["Москва", "Санкт-Петербург", "Воронеж"];

(async () => {
    const weathers = fetchData(cities);
    for await (const weather of weathers) {
        console.log(weather);
    }
})();