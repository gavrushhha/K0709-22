async function fetchWithLimit(url, maxAttempts) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Ошибка");
            return await response.json();
        } catch (error) {
            console.log(`попытка ${attempts}`)
            attempts++;
            if (attempts >= maxAttempts) throw new Error("Запрос не удался");
        }
    }
}
//не корректная ссылка
fetchWithLimit('https://uncorrect-url', 3)
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

//корректная ссылка
fetchWithLimit('https://jsonplaceholder.typicode.com/todos/1', 3)
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

