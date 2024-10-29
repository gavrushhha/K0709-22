const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function* delayedCounter(max, ms) {
    for (let i = 1; i <= max; i++) {
        await delay(ms);
        yield i
    }
}


(async () => {
    const counter = delayedCounter(5, 500)

    for await (const value of counter) {
        console.log(value)
    }
})();
