async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        const status = data.completed ? "OK" : "NOT OK";
        yield status;
        if (status === "OK") {
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async () => {
    const statusGenerator = checkServerStatus();

    for await (const status of statusGenerator) {
        console.log(status);
    }
})();