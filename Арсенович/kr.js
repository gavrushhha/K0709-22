/// task 1
function getUniqueValues(arr) {
    return [...new Set(arr)];
}

/// test 1
let zxc = [1, 2, 3, 1, 'qwe', 'qwe']
console.log(getUniqueValues(zxc))


/// task 2
function filterByProperty(arr, property) {
    return arr.filter(item => item[property] === true);
}

/// test 2
let sigma = [{name: 'item1', available: true}, {name: 'item2', available: false}, {name: 'item3', power: true}]
console.log(filterByProperty(sigma, 'available'))

/// task 3
async function fetchWithLimit(url, max_requests) {
    let requests = 0;
    
    while (requests < max_requests) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Проблема с получением запроса');
            return await response.json();
        } catch (error) {
            requests++;
            console.log(`Попытка номер ${requests}`)
            if (requests === max_requests) {
                return 'Запрос не удался';
            }
        }
    }
}

/// test 3
let test_url = 'https://jsonplaceholder.typicode.com/todos/1'
fetchWithLimit(test_url, 3).then(data => console.log('Результат запроса с ограничением:', data)).catch(error => console.error(error));


/// task 4
async function loadAllData(urls) {
    try {
        const promises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) throw new Error('Ошибка загрузки данных');
            return response.json();
        }));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        return 'Ошибка загрузки данных';
    }
}

loadAllData(['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2']).then(data => console.log('Загруженные данные:', data)).catch(error => console.error(error));

/// task 5
async function* fetchPages(url, pages) {
    for (let page = 1; page <= pages; page++) {
        try {
            const response = await fetch(`${url}?page=${page}`);
            if (!response.ok) throw new Error('Ошибка загрузки данных');
            const data = await response.json();
            yield data;
        } catch (error) {
            break;
        }
    }
}

/// test 5
(async () => {
    const generator = fetchPages('https://jsonplaceholder.typicode.com/users', 1);
    
    for await (const page of generator) {
        console.log('Данные страницы:', page);
    }
})();
