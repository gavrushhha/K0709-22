var user = {
    name : 'Тест',
    age : 42,
    email : 'test_testovic@test.com' ,
    greet: function() {
        return `Привет, ${this.name}!`
    } 
}

function displayUserInfo(user) {
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`
}

console.log(displayUserInfo(user))
console.log(user.greet())