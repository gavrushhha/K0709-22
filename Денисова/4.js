/* Напишите функцию fetchAndTransform, которая принимает массив URL и загружает
данные по каждому URL параллельно. Данные должны быть преобразованы в массив
объектов, содержащих поля id и title. Если один из запросов завершился ошибкой,
функция должна возвращать "Ошибка загрузки". */


async function fetchAndTransform(urls) {
    try {
      const responses = await Promise.all(
        urls.map(url => fetch(url).then(response => {
          if (!response.ok) throw new Error('No');
          return response.json();
        }))
      );
      const transformedData = responses.map(data => ({
        id: data.id,
        title: data.title
      }));
      return transformedData;
    } catch (error) {
      return "Ошибка загрузки";
    }
}

const urls = [
  /* 'https://jsonplaceholder.typicode.com/todos/0', - если вставить ссылку то код прерывается*/ 
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
];

async function run() {
    const result = await fetchAndTransform(urls);
    console.log(result);
  }
run();
  
  

  