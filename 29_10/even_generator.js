function* evenNumber() {
    let num = 0
    while (true) {
        yield num
        num += 2
    }
}

const even = evenNumber()

console.log(even.next().value)
console.log(even.next().value)
console.log(even.next().value)
console.log(even.next().value)
console.log(even.next().value)
console.log(even.next().value)