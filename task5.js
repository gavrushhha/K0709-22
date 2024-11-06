async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield i;
    }
}

const max = 5;
const delay = 500;

(async () => {
    const counterGenerator = delayedCounter(max, delay);
    
    for await (const value of counterGenerator) {
        console.log(value);
    }
})();