async function loadAllData(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url).then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })));
        return responses;
    } catch {
        return "Ошибка загрузки данных";
    }
}

//хорошие юрл
const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4"
];

// плохие юрл
const urlsNoCorrect = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://sfdugfhera", //imposter
    "https://jsonplaceholder.typicode.com/todos/4"
];

// два запуска с хорошими и плохими ссылками
loadAllData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));

loadAllData(urlsNoCorrect)
    .then(data => console.log(data))
    .catch(error => console.error(error));
