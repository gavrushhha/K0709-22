function deepPropertyCount(data) {
    let count = 0;
    for (let elem in data) {
        if (typeof data[elem] === 'object') {
            count += deepPropertyCount(data[elem]);
        }
        count += 1;
    }
    return count;
}

console.log(deepPropertyCount({
    name: 'Alice',
    details: {
        age: 25,
        address: {
            city: 'New York',
            zip: 10001
        }
    }
}));
