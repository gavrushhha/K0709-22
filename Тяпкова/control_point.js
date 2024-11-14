//1
function getUniqueValues(arr) {
    return [...new Set(arr)];
  }
  

const values = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueValues(values)); 

 //2
 function filterByProperty(arr, property) {
    return arr.filter(item => item[property] === true);
  }
  

const items = [
    { name: 'item1', available: true },
    { name: 'item2', available: false },
    { name: 'item3', available: true },
  ];
console.log(filterByProperty(items, 'available'));


//3
async function fetchWithLimit(url, attempts) {
    for (let i = 0; i < attempts; i++) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return response;
        } else {
          throw new Error('Ошибка');
        }
      } catch (error) {
        if (i === attempts - 1) {
          return "Запрос не удался";
        }
      }
    }
  }


fetchWithLimit('https://ru.pinterest.com/', 3)
.then(response => {
    if (typeof response === 'string') {
    console.error(response); 
    } else {
    console.log('Всё гуд:', response);
    }
});

//доп
function groupBy(arr, key) {
    return arr.reduce((result, item) => {
      const keyValue = item[key];
      if (!result[keyValue]) {
        result[keyValue] = [];
      }
      result[keyValue].push(item);
      return result;
    }, {});
  }

const data = [
{ name: 'Викуся', group: 'Программисты' },
{ name: 'Даяна', group: 'Программисты' },
{ name: 'Жаклин', group: 'Кибербез' },
{ name: 'Вилка', group: 'Комплексы' }
];

const groupedData = groupBy(data, 'group');
console.log(groupedData);