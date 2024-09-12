// 1
function isPrime(num) {
    let count = 0
    for (let i = 2; i < num; i++) {
        if (num%i === 0) {count+=1}
    };
    if (count > 0) {
        return false
    } else {
        return true
    };
}

for (let i = 2; i <= 20; i++) {
    console.log(isPrime(i))
}


// 2
function findMinMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return {min, max}
}

const nums = []; 
for (let i = 0; i < 10; i++) { 
  nums.push(Math.floor(Math.random() * 100));  
}

const answer = findMinMax(nums)
console.log(`${answer.min}, ${answer.max}`)


// 3
const user = {
    name: 'Sam', age: 24, email: 'sam123@mail.ru', 
    greet: function() {console.log(`Привет, ${this.name}!`);} 
  }; 
   
function displayUserInfo(user) { 
    console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`); 
} 
   
displayUserInfo(user); 
user.greet(); 


//4 
const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]; 

for (let i = 0; i < students.length; i++) { 
    console.log(`Студент ${students[i]}, ваш порядковый номер: ${i + 1}`); 
} 

function findLongestName(names) { 
    if (names.length === 0) { 
        return null; 
    } 
    let lgst = names[0];     
    for (let i = 1; i < names.length; i++) { 
        if (names[i].length > lgst.length) { 
            lgst = names[i]; 
        } 
    } 
    return lgst;
} 

const lgst = findLongestName(students); 
console.log(`${lgst}`);


// 5
function formatDate(date) { 
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  
    const year = date.getFullYear(); 
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    return `${day}.${month}.${year} ${hours}:${minutes}`; 
  } 
   
  const now = new Date(); 
  console.log(formatDate(now)); 
   
  function daysDifference(date1, date2) { 
    const difference = Math.abs(date1.getTime() - date2.getTime()); 
    return Math.floor(difference / (1000 * 60 * 60 * 24));  
  } 
   
  const date1 = new Date("2023-12-01"); 
  const date2 = new Date();  
  const difference = daysDifference(date1, date2); 
  console.log(`${difference}`);