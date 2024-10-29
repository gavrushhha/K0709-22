function* sumNumber() {
    let sum = 0
    while (true) {
        sum += yield sum
    }
}

const sum = sumNumber()

console.log(sum.next().value)
console.log(sum.next(5).value)
console.log(sum.next(20).value)
console.log(sum.next(30).value)