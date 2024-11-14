// Напишите функцию averageProperty, которая принимает массив объектов и имя
// числового свойства, вычисляя среднее значение.

function averageProperty(items, property) {
    let sum = 0;
    for (let item of items) {
        sum += item[property];
    }
    return sum;
}

const items = [{ score: 20 }, { score: 30 }, { score: 40 }];

console.log(averageProperty(items, 'score'));

