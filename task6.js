async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const status = response.ok;
        if (status) {
            yield "OK"
        } else {
            yield "NOT OK"
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async () => {
    const checker = checkServerStatus()
    console.log(await checker.next())
    console.log(await checker.next())
    console.log(await checker.next())
    console.log(await checker.next())
    console.log(await checker.next())
    console.log(await checker.next())
})()
