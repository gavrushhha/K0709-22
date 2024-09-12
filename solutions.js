// 1
function taskone(n){
    if (n === 1 || n === 0) {
        return NaN;
    }
    
    else if (n > 1) {
    
        for (let i = 2; i <= n/2; i++) {
            if (n % i == 0) {
                return false;
                break;
            }
        }
        return true;
    }
  }

// 2
var arrtwo = []
for (let i = 0; i < 11; i++){
    arrtwo.push(Math.random() * 100)
}
console.log(arrtwo)
function tasktwo(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
console.log(tasktwo(arrtwo));

// 3

user = {
    name: 'NameExample',
    age: 30,
    email: 'IamNotBraveEnoughForThisReference@gmail.com'
}

function displayUserInfo(user) {
    return "Имя: " + user.name + ", Возраст: " + user.age + ", Email: " + user.email
}

// 4

const studs = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

function studcounter(stud_arr){
    let i = 0;
    for (let stud of stud_arr){
        i++;
        console.log("Студент: " + stud + ", ваш порядковый номер: " + i);
    }
}

function findLongestName(array) {
  var longestname = "";

  array.forEach(function(name) {
    if(name.length > longestname.length) {
      longestname = name;
    }
  });

  return longestname;
}


studcounter(studs);

console.log(findLongestName(studs));

// 5

var day = new Date(1995, 12, 17, 3, 24, 0);

function formatDate(date) {
    return date.getDate() + '.' + date.getMonth()+1 + '.' + date.getYear() + ' ' + date.getHours() + ':' + date.getMinutes()
}

console.log(formatDate(day));

function diffTWOdays(date1, date2) {
    console.log(date2.getDate() - date1.getDate());
}

// *

function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    let out = arr.join('');
    return out;
}

console.log(reverseString('abc'))

const vowels = 'aoieu';
function removeVowels(str) {
    let i = 0;
    for (let char of str){

        if (vowels.some(function(char) { return str.indexOf(char) >= 0; })) {
            // I tried.
        }
        
        i++;
    }
}