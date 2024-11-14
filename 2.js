function sumProperty(items, property){
    return items.reduce((total, item) => total + (item[property] || 0), 0)
}

const data = [{id: 1, amount: 10}, {id: 2, amount: 52}, {id: 3, not_amount: 42}]

console.log(sumProperty(data, 'amount'))