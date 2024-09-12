let arr = []

for (let i = 0; i < 10; i ++) {
    arr.push(Math.floor(Math.random() * 100))
}

function findMinMax(array) {
    let min = array[0]
    let max = array[0]
    array.forEach(element => {
        if (element < min) {
            min = element
        }
        if (element > max) {
            max = element
        }
    })
    return { min, max }
}

console.log(arr)
console.log(findMinMax(arr))