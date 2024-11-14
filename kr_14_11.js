// Зорина Катя К0709-22 Вариант 3

// 1 доп задание

arr = [10, 2, 3, 4, 5, 6, 7, 8, 9, 1]

function findMinMax(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return [min, max];
}

// console.log(findMinMax(arr))


// 2 доп задание

function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words[0] === "" ? 0 : words.length;
}

const string = 'cat dog cow'
// console.log(countWords(string))


// задача 1

function findObjectByProperty(arr, property, value) {
    return arr.find(item => item[property] === value) || null;
}

const items = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }];
// console.log(findObjectByProperty(items, 'name', 'item2')); 
// console.log(findObjectByProperty(items, 'id', 3)); 


// задача 2 

function sumProperty(arr, property) {
    return arr.reduce((sum, item) => sum + (item[property] || 0), 0);
}

const data = [{ id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }];
// console.log(sumProperty(data, 'amount'));
// console.log(sumProperty(data, 'ale')); 


// задача 3

async function fetchDataWithTimeoutAndRetry(url, maxAttempts, timeout) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const fetchPromise = fetch(url);
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Запрос превысил время ожидания')), timeout)
            );

            const response = await Promise.race([fetchPromise, timeoutPromise]);

            if (response.ok) return await response.json();
            throw new Error(`Запрос завершился со статусом ${response.status}`);
        } catch (error) {
            if (attempt === maxAttempts) {
                throw new Error('Запрос не выполнился после всех попыток');
            }
        }
    }
}

// fetchDataWithTimeoutAndRetry('https://jsonplaceholder.typicode.com/posts/1', 3, 1000)
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));




// задача 4

async function fetchAndTransform(urls) {
    try {
        const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));

        return results.map(data => ({
            id: data.id,
            title: data.title
        }));
    } catch {
        return 'Ошибка загрузки';
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
];

// fetchAndTransform(urls)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



// 5

async function* paginatedFetchWithStop(url, maxPages) {
    let page = 1;

    while (page <= maxPages) {
        const response = await fetch(`${url}?page=${page}`);
        const data = await response.json();

        if (!data.length) break;

        yield data;
        page++;
    }
}


(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const maxPages = 3;

    for await (const data of paginatedFetchWithStop(url, maxPages)) {
        console.log('Page Data:', data);
    }
})();
