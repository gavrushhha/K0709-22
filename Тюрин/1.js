function findObjectByProperty(list_of_objects, property, value) {
    for (let i = 0; i < list_of_objects.length; i++) {
        object = list_of_objects[i]
        if (object[property] === value) {
            return object
        }
    }
}


const items = [{id: 1, name: 'item1'}, {id: 2, name: 'item2'}, {id: 3, name: 'item3'}]
console.log(findObjectByProperty(items, 'kk', 3))