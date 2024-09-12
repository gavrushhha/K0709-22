/*  Author: Turapov I. A. 
    Group: K0709-22 
    Filename: tasks1
*/

/* 1. 
    Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true, если число простое, 
    и false в противном случае. Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.
*/
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


function isPrime(number) {
    for (var i=2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


for (element of numbers) {
    console.log('Number ' + element + ' ' + isPrime(element));
}

/* 2. 
    Создайте массив из 10 случайных чисел.
    Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя свойствами: 
    min — минимальное значение в массиве, max — максимальное.
    Вызовите функцию для созданного массива и выведите результат в консоль.
*/


const generateArray = (length, max) => ( [...new Array(length)].map( () => Math.round(Math.random() * max) ) ); 
const randomArray = generateArray(10, 99);


function findMinMax(massive) {
    var min = massive[0];
    var max = massive[1];
    for (number of massive) {
        if ((number < min) && (number < max)) {
            min = number;
        } else if (max < number) {
            max = number;
        }
    }
    return {
        MaxNumber: max,
        MinNumber: min
    };
}


console.log(...randomArray)
console.log(findMinMax(randomArray));


/* 3. 
    Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
    Напишите функцию displayUserInfo, которая принимает объект пользователя и выводит его данные в виде строки:
    "Имя: {name}, Возраст: {age}, Email: {email}".
    Добавьте в объект метод greet, который выводит приветственное сообщение, например: "Привет, {name}!".
    Вызовите метод для созданного объекта.
*/
var username = {
    name: "Grigory",
    age: "17",
    email: "somemail@mail.ru"
}


function displayUserInfo(user) {
    let msg = {greet: "Привет, " + user.name};
    Object.assign(user, msg);
    return "Name: " + user.name + "\nAge: " + user.age + "\nEmail: " + user.email + "\n" + user.greet + "!";
}


console.log(displayUserInfo(username));

/* 4. 
    Создайте массив строк, представляющих имена студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
    Используя цикл, выведите в консоль сообщение для каждого студента: "Студент {имя}, ваш порядковый номер: {индекс}".
    Напишите функцию findLongestName, которая находит самое длинное имя в массиве студентов и возвращает его.
*/
const group = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];


function findLongestName(students) {
    let longName = "";
    for (i=0; i < students.length; i++) {
        console.log(`Студент ${students[i]}, ваш порядковый номер: ${i}`);
        if (students[i].length > longName.length) {
            longName = students[i];
        }
    }
    return longName;
}

console.log(findLongestName(group));


/* 5.
    Напишите функцию formatDate, которая принимает объект Date и возвращает строку в формате DD.MM.YYYY HH:MM.
    Используйте методы объектов даты для форматирования.
    Вызовите функцию и выведите текущее время в этом формате.
    Напишите функцию, которая вычисляет разницу в днях между двумя датами.
*/
var someTime = new Date();
someTime.setFullYear(2006, 10, 17);


function formatDate(date) {
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}.`; // Существует dateString.
}


console.log(formatDate(someTime));