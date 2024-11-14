// 4
async function sequentialFetch(urls) {
    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ошибка в загрузке данных');
        }
        const data = await response.json();
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        return 'Ошибка в загрузке данных';
      }
    }
    return 'Задание 4, Все данные успешно загружены';
  }
  
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
  ];
  
  sequentialFetch(urls)
    .then(result => console.log(result))
    .catch(error => console.error(error));