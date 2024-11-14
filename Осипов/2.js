function groupBy(data, property) {
    let result = {};
    for (let elem of data) {
        // если нет такого свойства??
        let elem_property = elem[property];
        if (!(elem_property in result)) {
            result[elem_property] = [];
        }
        result[elem_property].push(elem);
    }
    return result;
}

console.log(groupBy([
    {name: 'Alice', group: 'Admin'},
    {name: 'Bob', group: 'User'},
    {name: 'Charlie', group: 'Admin'}
], 'group'))
