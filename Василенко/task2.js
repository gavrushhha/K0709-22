// 2.Напишите функцию sumProperty, которая принимает массив объектов и имя
// числового свойства, а затем возвращает сумму всех значений этого свойства.
// Например:
// const data = [ { id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }, ]

function sumProperty(objects, number_property) {
    let sum = 0;
    for (const obj of objects) { 
        sum += obj[number_property];
    }
    return sum;
}

const data = [ { id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }, ];

console.log('#2')
console.log(sumProperty(data, 'amount')); // 45
console.log(sumProperty(data, 'id')); // 6