// Напишите функцию fetchWithRetryAndTimeout, принимающую URL, время
// ожидания и попытки. Если запрос не завершен за время ожидания, повторите его
// указанное число раз.

async function fetchWithRetryAndTimeout(url, timeout, retries) {
    const fetchWithTimeout = (url, timeout) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('Скучное ождание, предлааю прекртаить')), timeout);
            fetch(url)
                .then(response => {
                    clearTimeout(timer);
                    resolve(response);
                })
                .catch(err => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };

    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetchWithTimeout(url, timeout);
            if (!response.ok) {
                throw new Error(`Ошибка *грустный клоун* (не нашел смайлик)`);
            }
            return await response.json();
        } catch (error) {
            console.warn(`Ты завалил на одну попытку больше ${attempt + 1}`);
            if (attempt === retries - 1) {
                throw new Error('Количество попыток истекло, лох');
            }
        }
    }
}

const url = 'Zdesdolzhennormurl';
const timeout = 3000;
const retries = 3;

fetchWithRetryAndTimeout(url, timeout, retries)
    .then(data => console.log('Полученные данные:', data))
    .catch(error => console.error('Ошибка:', error.message));
