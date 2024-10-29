async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield i;
    }
}

(async () => {
    const max = 5;
    const delay = 500;
    const counter = delayedCounter(max, delay);

    for await (const value of counter) {
        console.log(value);
    }
})();
