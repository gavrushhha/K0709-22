// Напишите функцию filterNestedProperty, которая принимает массив объектов и
// строку в формате "property.subproperty", возвращая массив объектов, где
// subproperty имеет значение true.

function filterNestedProperty(data, property) {
    let res = []
    let pr = property.split('.');

    for (const datum of data) {
        if (datum[pr[0]][pr[1]]) {
            res.push(datum)
        }
    }
    return res
}

const data = [ { name: 'item1', details: { active: true } }, { name: 'item2', details: { active: false
    } }, ];

console.log(filterNestedProperty(data, 'details.active'));

