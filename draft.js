

// Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true,
// если число простое, и false в противном случае.
// Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.

// 1

function isPrime(number) {
    if (number === 1 || number == 2 || number === 0) {
        return true
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

// for (let i = 2; i <= 20; i++) {
//     console.log(isPrime(i))
// }


// 2
// Создайте массив из 10 случайных чисел.
// Напишите функцию findMinMax, которая принимает массив и возвращает объект
// с двумя свойствами: min — минимальное значение в массиве, max — максимальное.
// Вызовите функцию для созданного массива и выведите результат в консоль.


arr = [10, 2, 3, 4, 5, 6, 7, 8 , 9, 1]

function findMinMax(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return [min, max]
}

// console.log(findMinMax(arr))

// 3

// Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
// Напишите функцию displayUserInfo, которая принимает объект пользователя
// и выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
// Добавьте в объект метод greet,
// который выводит приветственное сообщение, например: "Привет, {name}!".
// Вызовите метод для созданного объекта.

const user = {
    name: 'katya', age: 17, email: '1@gmail.com'}


function displayUserInfo(obj) {
    obj.greet = function() {
        console.log('Привет, ' + this.name)
    }
    return `Имя: ${obj.name}, Возраст: ${obj.age}, Email: ${obj.email}`
}

// displayUserInfo(user);
// user.greet();


// 4

// Создайте массив строк, представляющих имена студентов: 
// ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
// Используя цикл, выведите в консоль сообщение для каждого студента:
// "Студент {имя}, ваш порядковый номер: {индекс}".
// Напишите функцию findLongestName, которая находит самое длинное имя в
// массиве студентов и возвращает его.

arr = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]

for (let i = 0; i < arr.length; i++) {
    console.log(`Студент ${arr[i]}, ваш порядковый номер: ${i}`)
}

function findLongestName(arr) {
    let longest_name = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest_name.length) {
            longest_name = arr[i]
        }
    }
    return longest_name
}


// console.log(findLongestName(arr))


// 5

// Напишите функцию formatDate, которая принимает объект Date 
// и возвращает строку в формате DD.MM.YYYY HH: MM. 
// Используйте методы объектов даты для форматирования.
// Вызовите функцию и выведите текущее время в этом формате.
// Напишите функцию, которая вычисляет разницу в днях между двумя датами.


function formatDate(date) {
    let month = date.getMonth() + 1
    let day = date.getDate()
    if (day < 10) {
        day = '0' + date.getDate()
    } else if (month < 10) {
        month = '0' + date.getMonth()
    }
    return `${day}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

var now = new Date();

// console.log(formatDate(now))


function deltaTime(date1, date2) {
    delta = date1 - date2
    // в дне 86400 секунд
    delta = delta / 86400000
    console.log(Math.floor(delta))
}
var date1 = new Date(2012, 0, 1);
var date2 = new Date(2011, 0, 1);
deltaTime(date1, date2)