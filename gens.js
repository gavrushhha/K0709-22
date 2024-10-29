// 1
function evenNumber() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

const even = evenNumber();

console.log(even.next().value)
console.log(even.next().value)
console.log(even.next().value)



// 2
function* sumNumber(){
    let sum = 0;
    while (true) {
        sum += yield sum;
    }
}

const sum = sumNumber();

console.log(sum.next().value)
console.log(sum.next(5).value)
console.log(sum.next(20).value)
console.log(sum.next(30).value)



// 3
function trafficLight() {
    while (true){
        yield 'green';
        yield 'yellow';
        yield 'red';
    }
}



// 4
async function fetchData(cities) {
    for (const city of cities){
        console.log(`request for weather in the city ${city}`)
        const response = await fetch(`link to the api`)
        const data = await response.json();
        yield data
    }
}

const cities = ['Moscow', 'Paris', 'Los Angeles']

(async () => {
    const weathers = fetchData(cities);
    for await (const weather of weathers){
        console.log(weather)
    }
})();



// 5
function* innerSequence(){
    yield 1;
    yield 2;
    yield 3;
}

function* outerSequence(){
    yield 'start';
    yield* innerSequence();
    yield 'end';
}

const seq = outerSequence();

for (let value of seq){
    console.log(value);
}
