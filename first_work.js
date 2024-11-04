console.log('Number 1:')
function isPrime(num) {
    let max_del = 2
    while (num % max_del !== 0) {
        max_del++
    }
    return max_del == num
}
let res = []
for (let num = 2; num < 20; num++) {
    res.push(isPrime(num))
    
}


console.log(res)

console.log('Number 2:')
arr = [23, 12, 54, 10, 9]

function findMinMax(arr) {
    let min_num = Infinity
    let max_num = -1000 * 10
    for (const num of arr) {
        if (num < min_num) {
            min_num = num
        }
        if (num > max_num) {
            max_num = num
        }
    }
    return [min_num, max_num]
}

console.log(findMinMax(arr))


console.log('Number 3:')

const user = {
    name: 'A',
    age: 12,
    email: 'pomogite@gmail.ru'
}

function displayUserInfo(user) {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`)
    user['greet'] = `Привет, ${user.name}!`
    return user
}

console.log(displayUserInfo(user))


console.log('Number 4:')


const students_info = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]

for (let index = 0; index < students_info.length; index++) {
    console.log(`Студент ${students_info[index]}, ваш порядковый номер: ${index}`)
    
}

function findLongestName(students_info) {
    let longest_name = ''
    for (const name of students_info) {
        if (name.length > longest_name.length) {
            longest_name = name
        }
    }
    return longest_name
}

console.log(findLongestName(students_info))


console.log('Number 5:')


function formatDate(date) {
    const day = String(date.getDate())
    const month = String(date.getMonth() + 1)
    const year = date.getFullYear()
    const hours = String(date.getHours())
    const minutes = String(date.getMinutes())
    
    return `${day}.${month}.${year} ${hours}:${minutes}`
}

const currentDate = new Date()
console.log(formatDate(currentDate))

function DaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000
    const diffInTime = Math.abs(date2 - date1)
    return Math.ceil(diffInTime / oneDay)
}
const date2 = new Date('December 17, 2023 03:24:00')
console.log(DaysDifference(currentDate, date2))


console.log('Number 6:')



function reverseString(seq) {
    return seq.split('').reverse().join('')
}

console.log(reverseString('abc'))


console.log('Number 7:')



const VOWELS = "aeiouy"

function deleteVowels(seq) {
    res = ''
    for (const letter of seq) {
        if (!VOWELS.includes(letter)) {
            res += letter
        }
    }
    return res
}

console.log(deleteVowels('adfaes'))