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
console.log()


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
console.log()


// 3. Напишите функцию fetchDataWithTimeoutAndRetry, которая выполняет fetch
// запрос и принимает URL, максимальное количество попыток и время ожидания. Если
// запрос не успевает завершиться за указанное время, он должен повторяться
// указанное количество раз. Если все попытки неудачны, вернуть ошибку
async function fetchDataWithTimeoutAndRetry(url, retries, timeout) {
    for (let i = 0; i < retries; i++) {
        try {
            await Promise.race([
                fetch(url),
                new Promise((resolve, reject) => {
                    setTimeout(reject, timeout, new Error('Timeout exceeded'))
                })
            ]).then((response) => {
                console.log('Ответ от сервера:',response);
            })
        } catch (error) {
            console.log(`Попытка ${i + 1}. Превышено время ожидания`);
            continue;
        }
        console.log(`Попытка ${i + 1} успешна`)
        return;
    }
}

fetchDataWithTimeoutAndRetry('https://google.com', 3, 800);
console.log()


// 4. Напишите функцию fetchAndTransform, которая принимает массив URL и загружает
// данные по каждому URL параллельно. Данные должны быть преобразованы в массив
// объектов, содержащих поля id и title. Если один из запросов завершился ошибкой,
// функция должна возвращать "Ошибка загрузки"


function fetchAndTransform(urls) {
    let promises = [];
    
    urls.forEach((url, index) => {
        promises.push(new Promise((resolve) => {
            fetch(url)
        }))
        console.log('next')
    });

    console.log(Promise.all(promises))
}

fetchAndTransform(
    [
        'https://google.com',
        'https://google.com',
        'https://google.com'
    ]
)

