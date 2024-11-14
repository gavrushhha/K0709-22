const fetchDataWithTimeoutAndRetry = async (url, maxRetries = 3, timeout = 10000) => {
    let attempt = 1;
  
    while (attempt <= maxRetries) {
      try {
        const controller = new AbortController();
        const signal = controller.signal;
        const response = await Promise.race([
          fetch(url, { signal }),
          new Promise((reject) => {
            setTimeout(() => {
              controller.abort();
              reject(new Error(`Запрос не завершен за ${timeout} миллисекунд`));
            }, timeout);
          }),
        ]);
        return response;
      } catch (error) {
        if (error.name === 'AbortError') {

          attempt++;
          console.warn(`Попытка ${attempt - 1} не удалась. Осталось ${maxRetries - attempt + 1} попыток.`);
        } else {
          throw error;
        }
      }
    }
    throw new Error(`Все попытки выполнить запрос не удались`);
  };
  

  fetchDataWithTimeoutAndRetry('https://developer.spotify.com/documentation/web-api', 5, 10000)
    .then(response => {
      console.log('Успешный ответ:', response);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
