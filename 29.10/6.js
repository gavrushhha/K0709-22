async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        const status = Object.keys(data).length !== 0 ? 'OK' : 'NOT_OK';
        if (status === 'OK') {
            yield data.completed ? '200' : '404';
        }
        else if (status === 'NOT_OK') {
            yield status;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async function startGenerator() {
    const generator = checkServerStatus();
    for await (const status of generator) {
        console.log(status);
        if (status === 'OK') {
            break;
        }
        if (status === 'NOT_OK') {
            break;
        }
    }
})()