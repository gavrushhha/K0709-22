function* fibonacci() {
    let a = 0;
    let b = 1;
    yield a;
    yield b;
    while (true) {
        [a, b] = [b, a + b];
        yield b;
    }
}

const fibGen = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}
