async function fetchWithTimeout(url, timeout) {
    return Promise.race([
        new Promise(
            (resolve, reject) => resolve(fetch(url))
        ),
        new Promise(
            (resolve, reject) =>
                setTimeout(() => reject("Время ожидания истекло!"), timeout)
        )
    ]);
}

fetchWithTimeout('https://google.com', 5000).then(console.log, console.log);
