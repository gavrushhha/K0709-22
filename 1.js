function* fibonacci() {
    let a = 0
    let b = 1
    let c = 0
    while (true) {
        yield a
        c = a
        a = b
        b = c + b
    }
}

const fibGen = fibonacci()

for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value)
}
