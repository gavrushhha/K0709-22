function* trafficLight() {
    while (true) {
        yield 'green'
        yield 'yellow'
        yield 'red'
    }
}

const light = trafficLight()

console.log(light.next().value)
console.log(light.next().value)
console.log(light.next().value)
console.log(light.next().value)