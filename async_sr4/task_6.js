async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1l.jkh,jgmf')
        yield response.status
    }
}

(async () => {
    const checker = checkServerStatus()
    for await (const status of checker) {
        if (status != 200) {
            console.error('Server is not responding')
        } else {
            console.log('Server is responding')
            return
        }
    }
})()