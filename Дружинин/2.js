function filterByProperty(objects, name) {
    let resArr = [];
    for (let obj of objects) {
        if (obj[name] === true) {
            resArr.push(obj);
        }
    }

    return resArr;
}

const items = [{name: 'item1', available: true}, {name: 'item2', available: false}, {name: 'item3', available: true},];
console.log(filterByProperty(items, "available"))
