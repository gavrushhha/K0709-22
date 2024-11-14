// 1. Напишите функцию findObjectByProperty, которая принимает массив объектов,
// имя свойства и значение. Функция должна возвращать первый объект, у которого
// указанное свойство имеет данное значение.
// Например:
// const items = [ { id: 1, name: 'item1' }, { id: 2, name: 'item2' }, ];

function findObjectByProperty(objects, property, value) {
    for (const obj of objects) {
        if (obj[property] === value) {
            return obj;
        }
    }

}

const items = [ { id: 1, name: 'item1' }, { id: 2, name: 'item2' }, ];

console.log('#1')
console.log(findObjectByProperty(items, 'name', 'item1'))
console.log(findObjectByProperty(items, 'id', 2))