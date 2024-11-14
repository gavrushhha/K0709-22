function filterNestedProperty(objs, property){
    let resarr = [];
    ind = property.indexOf('.')
    for (let obj of objs){
        if (obj[property.slice(0, ind)][property.slice(ind+1, property.length)]){
            resarr.push(obj);
        }
    }
    return resarr;
}

const objs = [{name: 'item1', details: {active: false}}]

console.log(filterNestedProperty(objs, 'details.active'))
