# K0709-22
# Самостоятельная работа 
## [Задание 1. Работа с функциями](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true, если число простое, и false в противном случае.
- Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.
## [Задание 2. Работа с массивами](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Создайте массив из 10 случайных чисел.
- Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя свойствами: min — минимальное значение в массиве, max — максимальное.
- Вызовите функцию для созданного массива и выведите результат в консоль.
## [Задание 3. Работа с объектами](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
- Напишите функцию displayUserInfo, которая принимает объект пользователя и выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
- Добавьте в объект метод greet, который выводит приветственное сообщение, например: "Привет, {name}!".
- Вызовите метод для созданного объекта.
## [Задание 4. Циклы и массивы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- Создайте массив строк, представляющих имена студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
- Используя цикл, выведите в консоль сообщение для каждого студента: "Студент {имя}, ваш порядковый номер: {индекс}".
- Напишите функцию findLongestName, которая находит самое длинное имя в массиве студентов и возвращает его.
## [Задание 5. Работа с датой и временем](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Напишите функцию formatDate, которая принимает объект Date и возвращает строку в формате DD.MM.YYYY HH:MM. Используйте методы объектов даты для форматирования.
- Вызовите функцию и выведите текущее время в этом формате.
- Напишите функцию, которая вычисляет разницу в днях между двумя датами.
## Дополнительное задание
- Создайте функцию reverseString, которая принимает строку и возвращает ее в перевернутом виде.
- Напишите функцию, которая принимает строку и возвращает ее, удалив все гласные буквы.

Аргун В. Г. (К0709-22)

// 1
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i <= 20; i++) {
  console.log(`${i} is prime: ${isPrime(i)}`);
}

// 2
let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

function findMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

console.log(randomNumbers);
console.log(findMinMax(randomNumbers));

// 3
let user = {
  name: "Иван",
  age: 30,
  email: "ivan@example.com",
  greet() {
    console.log(`Привет, ${this.name}!`);
  }
};

function displayUserInfo(user) {
  console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`);
}

displayUserInfo(user);
user.greet();

// 4
let students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

students.forEach((student, index) => {
  console.log(`Студент ${student}, ваш порядковый номер: ${index + 1}`);
});

function findLongestName(arr) {
  return arr.reduce((longest, name) => name.length > longest.length ? name : longest, "");
}

console.log(`Самое длинное имя: ${findLongestName(students)}`);

// 5
function formatDate(date) {
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let year = date.getFullYear();
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date()));

function dateDifference(date1, date2) {
  let diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

let date1 = new Date("2024-01-01");
let date2 = new Date();
console.log(`Разница в днях: ${dateDifference(date1, date2)}`);

// Дополнительно
function reverseString(str) {
  return str.split('').reverse().join('');
}

function removeVowels(str) {
  return str.replace(/[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g, '');
}

console.log(reverseString("Пример строки"));
console.log(removeVowels("Пример строки"));

