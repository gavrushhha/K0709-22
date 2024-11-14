/*
    Control work - Variant 4
    Group: K0709-22
    Turapov I.A.

    Extras:
        - Реализуйте генератор *sequenceGenerator(start, end), 
        который генерирует последовательность чисел от start до end.

        - Напишите функцию concatStringsAsync(arr), 
        которая асинхронно объединяет все строки из массива 
        с задержкой между каждым добавлением строки в итоговый результат.
    
*/


// Extra1

function* numberSequence() {
    yield 1;
    yield 2;
    yield 3;
}


function* sequenceGenerator() {
    yield 'start';
    yield* numberSequence();
    yield 'end';
}


const seq = sequenceGenerator();

console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);

// Extra2


async function concatStringsAsync(arr, delay = 500) {
    let result = '';

    for (let str of arr) {
        result += str;
        console.log(result);
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    return result;
}

concatStringsAsync(['I', ' alive', ' again', '!'], 1000).then(result => console.log(`Output: ${result}`));
concatStringsAsync(['Greetings', ' user', ' C4tLine', '!'], 1000).then(result => console.log(`Output: ${result}`));


// 1


function filterNestedProperty (massive, details) {
    let filtred = [];
    property = details.slice(0, details.indexOf('.'))
    subproperty = details.slice(details.indexOf('.') + 1, details.length)

    for (const dict of massive) {
        console.log(dict)
        if (dict[property][subproperty] === true) {
            filtred.push(dict);
        }
    }

    return filtred;
}

const data1 = [
    {name: 'item1', details: {active: true}},
    {name: 'item2', details: {active: false}},
    {name: 'item3', details: {active: false}},
    {name: 'item4', details: {active: true}},
];
console.log(filterNestedProperty(data1, 'details.active'));

const data2 =[
    {name: 'some', idunno: {flag: false}},
    {name: 'thing', idunno: {flag: false}},
    {name: 'some', idunno: {flag: false}},
    {name: 'one', idunno: {flag: true}},
];
console.log(filterNestedProperty(data2, 'idunno.flag'));

// 2


function averageProperty (massive, name) {
    let count = 0;
    let sum = 0;
    for (const dict of massive) {
        count += 1;
        sum += dict[name];
    }
    return sum / count;
}


const items = [{score: 20}, {score: 30}, {score: 40}];
console.log(averageProperty(items, 'score'));


// 4

function loadSelectedData(urls) {
    return Promise.allSettled(
        urls.map(url => 
            fetch(url).then(response => {
                if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
                return response.json();
            })
        )
    ).then(results => 
        results.filter(result => result.status === 'fulfilled').map(result => result.value)
    );
}

const urls = [
    'https://workspace.google.com/intl/ru/products/docs/',
];


// Работает, однако URL не тот
loadSelectedData(urls).then(data => console.log(`Output: ${data}`));




// 5


async function* fetchPagesWithStopCondition(baseUrl, maxPages) {
    let currentPage = 1;

    while (currentPage <= maxPages) {
        const url = `${baseUrl}?page=${currentPage}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.log(`Page ${currentPage} not loaded`);
                return;
            }

            const data = await response.json();

            if (!data || data.length === 0) {
                console.log(`Data not found on page ${currentPage}`);
                return;
            }

            yield data;
        } catch (error) {
            console.log(`Error ${currentPage}: ${error.message}`);
            return;
        }

        currentPage++;
    }
}


(async () => {
    const baseUrl = 'https://workspace.google.com/intl/ru/products/docs/';
    const maxPages = 5;

    for await (const pageData of fetchPagesWithStopCondition(baseUrl, maxPages)) {
        console.log('Data on page:', pageData);
    }
})();
