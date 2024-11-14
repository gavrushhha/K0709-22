const cheerio = require("cheerio");

// Задача 1
// Напишите функцию findObjectByProperty, которая принимает массив объектов,
// имя свойства и значение. Функция должна возвращать первый объект, у которого
// указанное свойство имеет данное значение.
// Например:
// const items = [ { id: 1, name: 'item1' }, { id: 2, name: 'item2' }, ];
// Корректный поиск sобъекта по свойству и значению — 10 баллов.
// Правильная работа с массивом и возврат результата — 5 баллов.



function findObjectByProperty(array, property_name, value){
    for (let i = 0; i < array.length; i++) {
        let object = array[i]
        if (object[property_name] == value)
        {
            return object
        }
    }
}

console.log("task 1")
const items = [ { id: 1, name: 'item1' }, { id: 2, name: 'item2' }, ];
console.log(findObjectByProperty(items, "id", 1))


// Задача 2
// Напишите функцию sumProperty, которая принимает массив объектов и имя
// числового свойства, а затем возвращает сумму всех значений этого свойства.
// Например:
// const data = [ { id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }, ];
// Правильное вычисление суммы значений указанного свойства — 15 баллов.
// Умение работать с массивом объектов — 5 баллов.

function sumProperty(array, property_name){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i][property_name]
    }
    return sum
}

const data = [ { id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }, ];
console.log("task 2")
console.log(sumProperty(data, "amount"))


function withTimeout(promise, timeout) {
    return Promise.race([ promise, new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout) ) ]);
}

async function fetchDataWithTimeoutAndRetry(url, retry, timeout){
    for (let i = 0; i < retry; i++) {
        req = fetch(url, { signal: AbortSignal.timeout(timeout) }).then((r)=>{
            return r.status
        })
        try{
            r = await Promise.race([ req, new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout) ) ]);
            return r
        }
        catch{
            console.log("timeout")
        }
    }
    return "timeout"
}

url = "https://github.com/gavrushhha/K0709-22"

async function task3(){
    console.log("task 3")
    r = await fetchDataWithTimeoutAndRetry(url, 10, 100)
    console.log("result " + r)
}

// task3()


// Задача 4
// Напишите функцию fetchAndTransform, которая принимает массив URL и загружает
// данные по каждому URL параллельно. Данные должны быть преобразованы в массив
// объектов, содержащих поля id и title. Если один из запросов завершился ошибкой,
// функция должна возвращать "Ошибка загрузки".
// Правильное преобразование данных в массив объектов — 10 баллов.


urls = [
    "https://github.com/gavrushhha/K0709-22",
    "https://siriusuniversity.ru/",
    "https://rasp.yandex.ru/search/suburban/?fromId=s9812789&fromName=Имеретинский+курорт+(Олимпийский+парк)&toId=s9613034&toName=Сочи&when=16+ноября",
]

async function fetchAndTransform(urls) {
    let requests = []
    let res = []

    for (let i = 0; i < urls.length; i++) {
        console.log("url: " + urls[i])
        let req = fetch(urls[i]).then((r)=>{
            r.text().then((html)=>{
                const data = html;
                const $ = cheerio.load(data);
                const title = "";
                $("title").each((_, element) => {
                });
                res.push({id:urls[i], title:title})
            })
        })
        requests.push(req)
    }
    await Promise.all(requests)
    return res
}

async function task4(urls){
    let data = await fetchAndTransform(urls)
    console.log(data)
}

task4(urls)