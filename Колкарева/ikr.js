
// 1
function deepPropertyCount(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
        count++;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            count += deepPropertyCount(obj[key]);
        }
        }
    } return count;
}
const data = {name: 'Alice', details: {age: 25, address: {city: 'New York', zip: 10001}}};
// console.log(deepPropertyCount(data));




// 2
function groupBy(arr, property) {
    return arr.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const users = [{name: 'Alice', group: 'admin'}, {name: 'Bob', group: 'user'}, {name: 'Charlie', group: 'admin'},]
// console.log(groupBy(users, 'group'))




// 3
async function fetchWithTimeout(url, timeout) {
    const cont = new AbortController();
    const signal = cont.signal;
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            controller.abort();
            reject(new Error("Время ожидания истекло"));
        }, timeout);
    });
    try {
        const response = await Promise.race([
            fetch(url, {signal}),
            timeoutPromise
        ]);
        return response;
    } catch (error) {throw error}
}
  
// fetchWithTimeout('https://www.deepl.com/ru/translator', 5000)
//     .then(response => console.log('Ответ получен:', response))
//     .catch(error => console.error('Ошибка:', error.message));




// 4
async function sequentialFetch(urls) {
    for (let i = 0; i < urls.length; i++) {
        try {
            const resp = await fetch(urls[i]);
            if (!resp.ok) {
                throw new Error("Ошибка в загрузке данных");
        }
        console.log(`Загрузка данных из: ${urls[i]}`);
        if (i < urls.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        } catch (error) {
            console.error(error.message);
            return "Ошибка в загрузке данных";
        }
    }
    return "Все запросы выполнены успешно";
  }

// sequentialFetch(['https://www.deepl.com/ru/translator', 'https://github.com'])
//     .then(result => console.log(result))
//     .catch(error => console.error(error));




// extra
function chunkArray(arr, n) {
    const res = [];
    for (let i = 0; i < arr.length; i += n) {
        let srez = arr.slice(i, i + n)
        res.push(srez);
    } return res;
}
  
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(chunkArray(array, 2))
