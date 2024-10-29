/* Реализуйте асинхронный генератор checkServerStatus, который каждую секунду проверяет статус сервера. Генератор должен завершиться, если статус "OK". Используйте fetch('https://jsonplaceholder.typicode.com/todos/1') как пример для имитации запроса на сервер.

Проверка:

Создайте асинхронную функцию, которая запускает генератор и завершает выполнение при получении статуса "OK". */

async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        if (data) {
            yield data.completed ? "200":"404";
            if (data.completed) {
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

(async () => {
    const generator = checkServerStatus();
    for await (const status of generator) {
        console.log(status);
    }
})();