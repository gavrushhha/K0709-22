function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}