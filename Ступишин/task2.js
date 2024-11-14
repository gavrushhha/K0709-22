function filterByProperty(arr, property) {
    return arr.filter(item => item[property] === true);
}

const items = [
    { name: 'item1', available: true },
    { name: 'item2', available: false },
    { name: 'item3', available: true }
];

const filteredItems = filterByProperty(items, 'available');
console.log(filteredItems);
