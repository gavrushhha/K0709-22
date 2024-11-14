async function sequentialFetchv2(urls) {
    let responses = [];
    let requests_delay = 500;
    let requests = urls.map(url =>
        _ => new Promise(
            (resolve, reject) => setTimeout(
                () => resolve(fetch(url)),
                requests_delay
            )
        )
    );
    for (let request of requests) {
        responses.push(await request());
    }
    return responses;
}

sequentialFetchv2([
    'https://google.com', 'https://yandex.ru', 'https://learn.javascript.ru'
]).then(console.log).catch(err => console.log('Ошибка в загрузке данных'))
