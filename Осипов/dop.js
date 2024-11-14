async function fetchAndProcessData(urls) {
    let requests = urls.map(url => fetch(url));
    return Promise.allSettled(requests);
}

fetchAndProcessData([
    'https://google.come', 'https://yandex.ru', 'https://learn.javascript.ru'
]).then(console.log, console.log)
