async function* delayedCounter(max_num, delay) {
    for (let i = 1; i <= max_num; i++) {
        await new Promise(resolve => setTimeout(resolve, delay))
        yield i
    }
}

(async () => {
    const daleyer = delayedCounter(5, 500)
    for await (const num of daleyer) {
        console.log(num)
    }
})()