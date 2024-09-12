// Кривенко Артём (плохой интернет)


// Задание 1. Работа с функциями
// Напишите функцию isPrime, которая принимает число 
// в качестве аргумента и возвращает true, если число простое, 
// и false в противном случае.
// Вызовите функцию для чисел от 2 до 20 и выведите результат 
// в консоль для каждого числа.

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
  }
  
  for (let i = 2; i < 21; i++) {
    console.log(`Число ${i} простое: ${isPrime(i)}`);
  }


//   Задание 2. Работа с массивами
//   Создайте массив из 10 случайных чисел.
//   Напишите функцию findMinMax, которая принимает массив 
//   и возвращает объект с двумя свойствами: min — минимальное 
//   значение в массиве, max — максимальное.
//   Вызовите функцию для созданного массива и выведите результат в консоль.

const rand = [];
for (let i = 0; i < 10; i++) {
    rand.push(Math.floor(Math.random()*10));
}
function findMinMax(a) {
  const min = Math.min(...a);
  const max = Math.max(...a);
  return {min, max};
}

console.log('Случайные числа:', rand);
console.log('Минимум и максимум:', findMinMax(rand));



// Задание 3. Работа с объектами
// Создайте объект user, который содержит информацию 
// о пользователе: имя, возраст, email.
// Напишите функцию displayUserInfo, которая принимает объект пользователя 
// и выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
// Добавьте в объект метод greet, который выводит приветственное сообщение, 
// например: "Привет, {name}!".
// Вызовите метод для созданного объекта.

const user = {
    name: 'Артём',
    age: 100,
    email: 'artem@yandex.ru',

    greet() {
      console.log(`Привет, ${this.name}!`);
    }
  };

function displayUserInfo(user) {
console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`);
}

displayUserInfo(user);
user.greet();



// Задание 4. Циклы и массивы

// Создайте массив строк, представляющих имена 
// студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
// Используя цикл, выведите в консоль сообщение для каждого 
// студента: "Студент {имя}, ваш порядковый номер: {индекс}".
// Напишите функцию findLongestName, которая находит самое длинное имя 
// в массиве студентов и возвращает его.

const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < students.length; i++) {
  console.log("Студент " + students[i] + ", ваш порядковый номер: " + (i + 1));
}

function findLongestName(arr) {
  let longestName = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestName.length) {
      longestName = arr[i];
    }
  }
  return longestName;
}

console.log("Самое длинное имя: " + findLongestName(students));


// Задание 5. Работа с датой и временем

// Напишите функцию formatDate, которая принимает объект Date
// и возвращает строку в формате DD.MM.YYYY HH:MM. 
// Используйте методы объектов даты для форматирования.
// Вызовите функцию и выведите текущее время в этом формате.
// Напишите функцию, которая вычисляет разницу в днях между двумя датами.

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + '.';
  }

  console.log(formatDate(new Date()));

  function day(day1, day2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const differenceInMs = day2 - day1;
    return Math.floor(differenceInMs / msPerDay);
  }

  const day1 = new Date('2024-09-01');
  const day2 = new Date('2024-09-12');
  console.log('Разница в днях:', day(day1, day2));
