function* fib() {
    let prev = 0;
    let pprev = 1;
    let sum = 0
    while (true) {
        yield sum
        sum = prev + pprev
        pprev = prev
        prev = sum
    }
}

const f = fib();
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
