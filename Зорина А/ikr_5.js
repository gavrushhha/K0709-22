// 5
async function* paginatedFetch(url, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
      const response = await fetch(`${url}?page=${page}`);
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
  
      const data = await response.json();
      if (!data || data.length === 0) {
        return;
      }
  
      yield data;
    }
  }
  
  (async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const maxPages = 5;
  
    try {
      for await (const pageData of paginatedFetch(url, maxPages)) {
        console.log('Страница данных:', pageData);
      }
    } catch (error) {
      console.error(error.message);
    }
  })();