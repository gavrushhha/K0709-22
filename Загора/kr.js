// КР 
// Вариант 3
// Загора Анна. k0709-22


// Задание 1
function findObjectByProperty(arr, propertyName, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][propertyName] === value) {
            return arr[i];
        }
    }
    return null;
}

const items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
];

const result = findObjectByProperty(items, 'id', 2);
console.log(result);



// Задание 2
function sumProperty(arr, propertyName) {
    return arr.reduce((accumulator, current) => {
        return accumulator + (current[propertyName] || 0);
    }, 0);
}

const data = [
    { id: 1, amount: 30 },
    { id: 2, amount: 20 },
    { id: 3, amount: 15 }
];

const totalAmount = sumProperty(data, 'amount');
console.log(totalAmount);

//Задание 3


async function fetchWithTimeout(url, timeout) {
    return Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout exceeded")), timeout),
      ),
    ]);
  }
  

async function fetchDataWithTimeoutAndRetry(url, maxAttempts, timeout) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const data = await fetchWithTimeout(url, timeout);
            return data;
        } catch (error) {
            console.error(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt === maxAttempts) {
                throw new Error(`All ${maxAttempts} attempts failed.`);
            }
        }
    }
}

const url = 'https://google.com';
const maxAttempts = 3;
const timeout = 2000;

fetchDataWithTimeoutAndRetry(url, maxAttempts, timeout)
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('Error:', error.message));


// задание 4


async function fetchAndTransform(urls) {
    try {
      let id = 1;
      const fetchPromises = urls.map((url) =>
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`ошибка HTTP. Статус: ${response.status}`);
            }
            return response;
          })
          .then((data) => ({
            id: id++,
            title: data.statusText,
          })),
      );
  
      const results = await Promise.all(fetchPromises);
      return results;
    } catch (error) {
      console.error("ошибка получения данных:", error.message);
      return "ошибка загрузки";
    }
  }
  const urls = [
    "https://ru.wikipedia.org",
    "https://lks.siriusuniversity.ru",
    "http://python.org/",
  ];
  
  fetchAndTransform(urls)
    .then((data) => console.log(data))
    .catch((error) => console.error("ошибка:", error));
  
