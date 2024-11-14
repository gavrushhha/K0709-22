const fetchWithRetryAndTimeout = async (url, timeout, n) => {
    for (let attempt = 0; attempt < n; attempt++) {
        let custom_options = {
            method: 'GET',
            signal: AbortSignal.timeout(timeout),
        }
        try {
            const response = await fetch(url, custom_options);
            if (response.ok) {
                return await response;
            } else {
                throw new Error(`Ошибка ${response.status}`);
            }
        } catch (err) {
            if (attempt === n - 1) {
                console.error(`Неудача для ${url} после ${n} попыток`);
                return null;
            }
        }
    }
};

const loadSelectedData = async (urls, timeout = 5000, retries = 3) => {
    const results = await Promise.all(
        urls.map(
            url => fetchWithRetryAndTimeout(url, timeout, retries)
        )
    );
    return results.filter(data => data !== null);
};

const urls = [
    'https://asdfasdfsdfsdfdsasdf.com', 
    'https://google.com/',
    'https://google.ru/',
];

loadSelectedData(urls)
    .then(data => console.log('Успешные:', data))
    .catch(error => console.error('Ошибки для:', error));
