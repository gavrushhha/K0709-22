async function* checkServerStatus() {
    while (true) {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();

        if (data.completed) {
            yield "OK";
            break;
        } else {
            yield "Not OK";
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async () => {
    const statusChecker = checkServerStatus();

    for await (const status of statusChecker) {
        console.log(`Статус сервера: ${status}`);
        if (status === "OK") {
            console.log("Сервер в порядке. Завершение проверки.");
            break;
        }
    }
})();
