/* Напишите функцию sumProperty, которая принимает массив объектов и имя
числового свойства, а затем возвращает сумму всех значений этого свойства. */

function sumProperty(array, name) {
    return array.reduce((sum, obj) => sum + obj[name], 0);
}

const data = [{ id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }];
const totalAmount = sumProperty(data, 'amount');
console.log(totalAmount);