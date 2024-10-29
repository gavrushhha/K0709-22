function* innerSequence() {
    yield 1
    yield 2
    yield 3
}

function* outerSequence() {
    yield 'start'
    yield* innerSequence()
    yield 'end'
}

const sequence = outerSequence()

for (let value of sequence) {
    console.log(value)
}