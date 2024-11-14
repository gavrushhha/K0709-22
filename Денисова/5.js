/* Реализуйте асинхронный генератор paginatedFetchWithStop, который принимает
URL и максимальное количество страниц. Генератор должен завершаться, если ответ
пустой или если достигнуто maxPages. */

/*
Для axios не было достаточно времени :)
 */

async function* paginatedFetchWithStop(url, maxPages) {
  for (let page = 1; page <= maxPages; page++) {
    const currentUrl = `${url}${page}`;
    try {
      const response = await fetch(currentUrl);
      if (!response.ok) return;
      const data = await response.json();
      if (!data || Object.keys(data).length === 0) return;
      yield data;
    } catch (error) {
      return;
    }
  }
}

(async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/';
  const maxPages = 5;
  for await (const data of paginatedFetchWithStop(url, maxPages)) {
    console.log('Полученные данные:', data);
  }
  console.log('Загрузка завершена');
})();