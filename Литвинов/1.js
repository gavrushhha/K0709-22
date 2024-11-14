function deepPropertyCount(obj){
    let counter = 0
    for(property in obj){
        if(typeof(obj[property]) === "object"){
            counter += deepPropertyCount(obj[property])
        } else{
            counter += 1
        }
    }
    return counter
}

const data = {
    name: 'Alice',
    details: {
        age: 25,
        address: {
            city: 'New York',
            zip: 10001
        }
    }
}

console.log(deepPropertyCount(data))