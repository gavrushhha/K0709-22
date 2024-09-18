// task1
function isPrime(num){
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

for(let i = 2; i <= 20; i++){
    console.log(isPrime(i))
}

// task 2
function generateArray(){
    let ans = [];
    for(let i = 0; i < 10; i++){
        ans.push(Math.random());
    }
    return ans;
}

function findMinMax(arr){
    let min = arr[0], max = arr[1];
    for(let i = 0; i < arr.length; i++){
        min = Math.min(arr[i], min);
        max = Math.max(arr[i], max);
    }
    return [min, max];
}

let myArray = generateArray();
console.log(myArray);
console.log((findMinMax(myArray)))

// task3
const user = {
    "name": "Тест",
    "age": 18,
    "email": "test@gmail.com"
}

function displayUserInfo(user){
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

console.log(displayUserInfo(user));

// task4
let students =  ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]
for(let i = 0; i < students.length; i++){
    console.log(`Студент ${students[i]}, ваш порядковый номер: ${i}`)
}

function findLongestName(students){
    let ans = "";
    for(let i = 0; i < students.length; i++){
        if(students[i].length > ans.length){
            ans = students[i];
        }
    }
    return ans;
}

console.log(findLongestName(students))

// task5
function formatDate(date){
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours() + 3}:${date.getMinutes()}`;
}

const date = new Date(Date.now());
console.log(formatDate(date))

// task6
function reverseString(line){
    let ans = "";
    for(let i = line.length - 1; i >= 0; i--){
        ans += line[i];
    }
    return ans;
}

console.log(reverseString('dracula'));

// task7
function deleteVowels(line){
    let ans = "";
    let vowels = new Set([
        'а', 'о', 'у', 'и', 'э',
        'ы', 'я', 'ю', 'е', 'ё',
    ]);
    for(let i = 0; i < line.length; i++){
        if(!vowels.has(line[i].toLowerCase())){
            ans += line[i];
        }
    }
    return ans;
}

console.log(deleteVowels("ТестОвЫеДанные"));
