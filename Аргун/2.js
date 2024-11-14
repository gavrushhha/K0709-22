function filterByProperty(arr, name) {
    return arr.filter(item => item[name] === true);
}

const items = [
    {name: 'item1', avaliable: true},
    {name: 'item2', avaliable: false},
    {name: 'item3', avaliable: true},
]

console.log(filterByProperty(items, 'avaliable'));