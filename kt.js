// Доп задание Кривенко Артём К0709-22

// function filterAndSort(arr, key) {
//     const filteredArr = arr.filter(obj => obj[key] === true);
//     const sortedArr = filteredArr.sort((a, b) => {
//       if (a[key] < b[key]) return -1;
//       if (a[key] > b[key]) return 1;
//       return 0;
//     });
//     return sortedArr;
//   }

//   const arr = [
//     { id: 1, active: true },
//     { id: 2, active: false },
//     { id: 3, active: true },
//     { id: 4, active: true },
//     { id: 5, active: false },
//   ];
  
//   const result = filterAndSort(arr, 'active');
//   console.log(result);






// Вариант 2

// №1
// function getUniqueValues(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index);
//   }
  
//   const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 5];
//   const unArr = getUniqueValues(arr);
//   console.log(unArr);





// №2
// function filterByProperty(arr, prop) {
//     return arr.filter(obj => obj[prop] === true);
//   }
//   const items = [
//     {name: 'item1', available: true},
//     {name: 'item2', available: false},
//     {name: 'item3', available: true},
//   ];

//   const availableItems = filterByProperty(items, 'available');
//   console.log(availableItems);





// №3
// function fetchWithLimit(url, limit) {
//     const link = async (url, tries) => {
//       try {
//         const response = await fetch(url);
//         if (response.ok) {
//           return response.text();
//         } else {
//           throw new Error(`Запрос завершился ошибкой ${response.status}`);
//         }
//       } catch (error) {
//         if (tries >= limit) {
//           return Promise.reject(new Error("Запрос не удался"));
//         } else {
//           return link(url, tries + 1);
//         }
//       }
//     };
  
//     return link(url, 0);
//   }
  
//   fetchWithLimit('https://www.google.com/', 5)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



// №4
// function loadAllData(urls) {
//     const prom = urls.map((url) => {
//       return fetch(url)
//         .then((response) => {
//           if (response.ok) {
//             return response.text();
//           } else {
//             throw new Error(`Ошибка загрузки данных по URL ${url}`);
//           }
//         })
//         .catch((error) => {
//           throw new Error(`Ошибка загрузки данных по URL ${url}: ${error.message}`);
//         });
//     });
  
//     return Promise.all(prom)
//       .then((data) => {
//         return data;
//       })
//       .catch(() => {
//         return "Ошибка загрузки данных";
//       });
//   }
  
//   const urls = [
//     "https://www.google.com/",
//     "https://ya.ru/",
//     "https://www.hp.com/",
//   ];
  
//   loadAllData(urls)
//     // .then((data) => console.log(data))
//     .catch(() => console.error());