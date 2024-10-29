async function checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (response.status === 200) {
            console.log('OK');
            break;
        } else {
            console.log("Checking...");
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

checkServerStatus();
