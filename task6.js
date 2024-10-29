async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        yield data.status;

        if (data.status === "OK") {
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function runCheckServerStatus() {
    for await (const status of checkServerStatus()) {
        console.log(status);

        if (status === "OK") {
            console.log('Got status OK')
            break;
        }
    }
}

runCheckServerStatus();
