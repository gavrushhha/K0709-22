// 3. Напишите функцию fetchDataWithTimeoutAndRetry, которая выполняет fetch
// запрос и принимает URL, максимальное количество попыток и время ожидания. Если
// запрос не успевает завершиться за указанное время, он должен повторяться
// указанное количество раз. Если все попытки неудачны, вернуть ошибку
async function fetchDataWithTimeoutAndRetry(url, retries, timeout) {
    for (let i = 0; i < retries; i++) {
        try {
            await Promise.race([
                fetch(url),
                new Promise((resolve, reject) => {
                    setTimeout(reject, timeout, new Error('Timeout exceeded'))
                })
            ]).then((response) => {
                console.log('Ответ от сервера:',response);
            })
        } catch (error) {
            console.log(`Попытка ${i + 1}. Превышено время ожидания`);
            continue;
        }
        console.log(`Попытка ${i + 1} успешна`)
        return;
    }
}

fetchDataWithTimeoutAndRetry('https://google.com', 3, 800);