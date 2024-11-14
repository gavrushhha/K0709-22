/* Напишите функцию fetchDataWithTimeoutAndRetry, которая выполняет fetch
запрос и принимает URL, максимальное количество попыток и время ожидания. Если
запрос не успевает завершиться за указанное время, он должен повторяться
указанное количество раз. Если все попытки неудачны, вернуть ошибку.*/

async function fetchDataWithTimeoutAndRetry(url, maxAttempts, timeout) {
  const fetchWithTimeout = (url, timeout) => {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Превышен лимит времени ожидания')), timeout)
    );
    const fetchPromise = fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Запрос не удался');
      }
      return response.json();
    });
    
    return Promise.race([fetchPromise, timeoutPromise]);
  };

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Попытка ${attempt}...`);
      const data = await fetchWithTimeout(url, timeout);
      console.log('Полученные данные:', data);
      return data;
    } catch (error) {
      console.error(`Попытка ${attempt} не удалась: ${error.message}`);
      if (attempt === maxAttempts) {
        throw new Error('Все попытки не удались');
      }
    }
  }
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetchDataWithTimeoutAndRetry(url, 3, 5000)
  .then(data => console.log('Окончательные данные:', data))
  .catch(error => console.error('Ошибка:', error.message));


