async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        yield new Promise(resolve => {
            setTimeout(() => {
                resolve(i);
            }, delay);
        });
    }
}

const max = 5;
const delay = 500;
const counterGen = delayedCounter(max, delay);

const runDelayedCounter = async () => {
    for await (const number of counterGen) {
        console.log(number);
    }
};

runDelayedCounter();
