// 1

function isPrime(number) {
    if (number < 2)
    {
    return false
    }
    for (var i = 2; i <= Math.sqrt(number); i++) 
    {
      if (number % i === 0) 
      return false
    }
    return true
  }
  
  for (var i = 2; i <= 20; i++) {
    console.log(`${i}: ${isPrime(i)}`);
  }


// 2

function generateRandomArray(length) {
    const randomArray = [];
    for (var i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 1000));
    }
    return randomArray;
}

function findMinMax(numbers) {

    var min = numbers[0];
    var max = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return { min, max };
}

const randomArray = generateRandomArray(10);
console.log("Массив:", randomArray);

const minMax = findMinMax(randomArray);
console.log("Минимальное число:", minMax.min);
console.log("Максимальное число:", minMax.max);


// 3

const user = {
    name: "Антон",
    age: 18,
    email: "anton@gmail.com",

    greet: function() {
        console.log(`Привет, ${this.name}!`)
    }
}

function displayUserInfo(user) {
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`
}

const userInfo = displayUserInfo(user)
console.log(userInfo)
user.greet()


// 4

const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]

for (var i = 0; i < students.length; i++) {
    console.log(`Студент ${students[i]}, ваш порядковый номер: ${i}`)
}

function LongName(names) {
    var longestName = ""

    for (const name of names) {
        if (name.length > longestName.length) {
            longestName = name
        }
    }
    return longestName
}

const longestName = LongName(students);
console.log(`Самое длинное имя: ${longestName}`)


// 5

function formatDate(date) {
    const year = date.getFullYear()
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    return `${day}.${month}.${year} ${hours}:${minutes}`
}

const currentDate = new Date()
const formattedCurrentDate = formatDate(currentDate)
console.log(`Текущая дата и время: ${formattedCurrentDate}`)

function calculateDateDifference(date1, date2) {
    const milsec = 24 * 60 * 60 * 1000
    const differenceInMs = Math.abs(date2 - date1)
    return Math.floor(differenceInMs / milsec)
}

const date1 = new Date('2000-2-03');
const date2 = new Date('2000-5-23');
const difference = calculateDateDifference(date1, date2)
console.log(`Разница в днях между ${formatDate(date1)} и ${formatDate(date2)}: ${difference} дней`)
