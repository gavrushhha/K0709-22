async function* delayedCounter() {
    let params = {}
    while (true) {
        params = yield params
        for (let i = 0; i < params.max; i++) {
            await new Promise((resolve) => setTimeout(resolve, params.delay))
            console.log(i)
        }
    }
}

(async () => {
    const gen = delayedCounter()
    await gen.next() // init
    console.log(await gen.next({max: 5, delay: 500}))
})()
