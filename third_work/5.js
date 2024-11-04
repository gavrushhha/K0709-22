async function* delayedCounter(max, delay) {
    for (let i = 0; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield i
    }
}
const max = 4
const delay = 500;

(async () => {
    const res = delayedCounter(max, delay)
    for await (const i of res) {
        console.log(i)
    }
})()