function findObjectProperty(items, property, value){
    return items.find(item => item[property] === value)
}


object_list = [
    {id: 1, property: 'qweqwe', pop: 'rock'},
    {id: 2, property: 'zxzxc', pop: 'pop'},
    {id: 3, property: 'asdzxc', pop: ''},
    {id: 4, property: 'qweqwe', pop: 'ioi'},
]
console.log(findObjectProperty(object_list, 'property', 'qweqwe'))