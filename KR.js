// Самостоятельная работа













// Зайцев К0709-22/3










// Задание 1. Работа с функциями
// Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true, если число простое, и false в противном случае.
// Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.


function isPrime(num){
    for (let i = 2; i < Math.floor(num/2)+1; i++) {
        if (num % i === 0) {
            return false;
        };
    };
    return true;
}

// for (let i = 2; i <= 20; i++){
//     console.log(i, isPrime(i));
// }




// Задание 2. Работа с массивами
// Создайте массив из 10 случайных чисел.
// Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя свойствами: min — минимальное значение в массиве, max — максимальное.
// Вызовите функцию для созданного массива и выведите результат в консоль.
var random_array = [];
for (let i = 0; i < 10; i++){
    random_array.push(Math.floor(Math.random()*100));
}


function findMinMax(array){
    obj = {
        'min': array[0],
        'max': array[0],
    };
    for (let i of array){
        if (i < obj.min){
            obj.min = i;
        };
        if (i > obj.max){
            obj.max = i;
        };
    };
    return obj;
}

// console.log(findMinMax(random_array));




// Задание 3. Работа с объектами
// Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
// Напишите функцию displayUserInfo, которая принимает объект пользователя и выводит его данные в виде строки: "Имя: {name}, Возраст: {age}, Email: {email}".
// Добавьте в объект метод greet, который выводит приветственное сообщение, например: "Привет, {name}!".
// Вызовите метод для созданного объекта.

user = {
    'name': 'John',
    'age': 30,
    'email': 'randommail'
};

function displayUserInfo(user){
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

user.greet = function(){
    console.log(`Привет, ${this.name}!`);
}


// console.log(displayUserInfo(user));
// user.greet();


// Задание 4. Циклы и массивы
// Создайте массив строк, представляющих имена студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
// Используя цикл, выведите в консоль сообщение для каждого студента: "Студент {имя}, ваш порядковый номер: {индекс}".
// Напишите функцию findLongestName, которая находит самое длинное имя в массиве студентов и возвращает его.

students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < students.length; i++){
    console.log(`Студент ${students[i]}, ваш порядковый номер: ${i}`);
}

function findLongestName(students){
    let longest = students[0];
    for (let i of students){
        if (i.length > longest.length){
            longest = i;
        };
    };
    return longest;
}

console.log(findLongestName(students));


// Задание 5. Работа с датой и временем
// Напишите функцию formatDate, которая принимает объект Date и возвращает строку в формате DD.MM.YYYY HH:MM. Используйте методы объектов даты для форматирования.
// Вызовите функцию и выведите текущее время в этом формате.
// Напишите функцию, которая вычисляет разницу в днях между двумя датами.

function formatDate(date){
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}



// Дополнительное задание
// Создайте функцию reverseString, которая принимает строку и возвращает ее в перевернутом виде.
// Напишите функцию, которая принимает строку и возвращает ее, удалив все гласные буквы.

function reverseString(str){
    new_str = '';
    for (let i = str.length-1; i >= 0; i--){
        new_str += str[i];
    };
    return new_str;
}
const Glasnye = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function deleteGlasnyeBukvy(str){
    const new_str = [];
    for (let letter of str){
        console.log(letter.toLowerCase());
        if (Glasnye.includes(letter.toLowerCase())){
            continue;
        }
        new_str.push(letter);
    }
    return new_str.join('');
}

console.log(deleteGlasnyeBukvy('Здарова, Бездарь!'));
