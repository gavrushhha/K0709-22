const fetchWithRetryAndTimeout = async (url, timeout, n) => {
    for (let attempt = 0; attempt < n; attempt++) {
        let custom_options = {
            method: 'GET',
            signal: AbortSignal.timeout(timeout),
        }
        try {
            const response = await fetch(url, custom_options);
            return await response;

        } catch (err) {
            throw new Error(`Ошибка таймаута`);
        }
    }
};

fetchWithRetryAndTimeout('https://sddfgdfdgdfgdf43fsdfsdf.com/', 5000, 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));

fetchWithRetryAndTimeout('https://sddfgdfdgdfgdf43fsdfsdf.com/', 5000, 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));

