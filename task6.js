async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');        
        yield response.status;

        if (response.status === 200) {
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function runCheckServerStatus() {
    for await (const status of checkServerStatus()) {
        console.log(status);

        if (status === 200) {
            console.log('Got status OK')
            break;
        }
    }
}

runCheckServerStatus();
