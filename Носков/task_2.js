function filterByProperty(objects, property) {
    var answer = [];
    for (let i of objects) {
        if (i[property] == true){
          answer.push(i);
        }
    }
    return answer
}


console.log(filterByProperty([ { name: 'item1', available: true }, { name: 'item2', available: false }, { name:
'item3', available: true }, ], 'available'))
