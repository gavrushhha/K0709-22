function sumProperty(list_of_objects, property) {
    sum = 0
    for (let i = 0; i < list_of_objects.length; i++) {
        object = list_of_objects[i]
        value = object[property]
        if (typeof value !== `number`) {
            console.log(`${property} value "${value}" is not a number. Ignoring`)
        }
        else {
            sum += value
        }
    }
    return sum
}


const data = [ { id: 1, amount: 10 }, { id: 2, amount: `120` }, { id: 3, amount: 15 }, ]
console.log(sumProperty(data, 'amount'))