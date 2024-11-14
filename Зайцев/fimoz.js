// Вариант 2
//  Задача 1
//  Напишите функцию getUniqueValues, которая принимает массив и возвращает
//  новый массив, состоящий только из уникальных значений.
//  Корректное выделение уникальных значений — 10 баллов.
//  Правильная работа с массивом и возврат результата — 5 баллов.


function getUniqueValues(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (uniqueArray[j] === currentValue) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(currentValue);
        }
    }
    return uniqueArray;
}

const inputArray = [1, 2, 2, 3, 8, 4, 4, 5, 8, 7];
const uniqueArray = getUniqueValues(inputArray);
console.log(uniqueArray); 
console.log('\n\n\n')





//  Задача 2
//  Напишите функцию filterByProperty, которая принимает массив объектов и имя
//  свойства. Функция должна возвращать массив объектов, где данное свойство имеет
//  значение true.
//  Например:
//  const items = [ { name: 'item1', available: true }, { name: 'item2', available: false }, { name:
//  'item3', available: true }, ];
//  Корректная фильтрация объектов по значению свойства — 15 баллов.
//  Обработка массива объектов и возврат правильного результата — 5 баллов.


function filterByProperty(arr,  prop_name) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i][prop_name] === true){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}


const items = [ { name: 'item1', available: true }, { name: 'item2', available: false }, { name:
 'item3', available: true }, ];

console.log(filterByProperty(items, 'available'))
console.log('\n\n\n')



//  Задача 3
//  Создайте функцию fetchWithLimit, которая принимает URL и максимальное
//  количество попыток запроса. Если запрос завершился ошибкой, функция должна
//  повторить его указанное количество раз. Если все попытки завершились неудачей,
//  возвращается ошибка "Запрос не удался".
//  Корректное выполнение повторных попыток — 15 баллов.
//  Обработка ошибок и возврат сообщения после всех попыток — 10 баллов.

async function request(url) {
    try {
        let response = await fetch(url);
        let data = await response.text();
        return data
    } catch (error) {
        return false
    }
}

async function fetchWithLimit(URL, triesNumber)  {
    let request_data = undefined
    for (let i = 0; i < triesNumber; i++){
        console.log('try number - ', i+1)
        request_data = await request(URL);
        if (!request_data) {
            console.log('trouble')
            continue;
        }
        console.log('все здраво, мы можем посещать ', URL)
        return
    }
    console.log('очень нездравый сайт')
    throw new Error("Запрос не удался")
}
fetchWithLimit('https://gayporn.com/', 20)
fetchWithLimit('https://fimozSterlyagova.com/', 20)





//  Задача 4
//  Напишите функцию loadAllData, которая принимает массив URL и загружает данные
//  по каждому URL параллельно, используя Promise.all. Если один из запросов
//  завершился ошибкой, функция должна вернуть сообщение "Ошибка загрузки данных".
//  Корректное выполнение Promise.all для параллельной загрузки данных — 10
//  баллов.
//  Обработка ошибок и возврат правильного сообщения — 10 баллов.








//  Задача 5
//  Напишите асинхронный генератор fetchPages, который принимает базовый URL и
//  максимальное количество страниц. Генератор должен возвращать данные для каждой
//  страницы (?page=1, ?page=2 и т.д.) до достижения maxPages.
//  Правильная реализация постраничной загрузки — 10 баллов.
//  Умение завершить генератор при достижении maxPages — 10 баллов


async function* fetchPages(baseUrl, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}?page=${page}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке страницы ${page}: ${response.statusText}`);
        }
        const data = await response.text();
        yield data;
    }
}

(async () => {
    const baseUrl = 'https://google.com/';
    const maxPages = 5;
    for await (const pageData of fetchPages(baseUrl, maxPages)) {
        // console.log(pageData);
        console.log('страница здраво загружена')
    }
})();