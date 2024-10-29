async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!response.ok) {
            console.error('Server is not responding')
            yield new Promise(resolve => setTimeout(resolve, 1000))
        } else {
            console.log('Server is responding')
            return
        }
    }
}

(async () => {
    const checker = checkServerStatus()
    for await (const status of checker) {
        console.log(status)
    }
})()