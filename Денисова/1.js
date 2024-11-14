/* Напишите функцию findObjectByProperty, которая принимает массив объектов,
имя свойства и значение. Функция должна возвращать первый объект, у которого
указанное свойство имеет данное значение. */

function findObjectByProperty(array, property, value) {
    return array.find((obj) => obj[property] === value);
}

const items = [ { id: 1, name: 'item1' }, { id: 2, name: 'item2' }, ];
const result = findObjectByProperty(items, 'name', 'item2');
console.log(result);