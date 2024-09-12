let user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    greet: function() {
        console.log('Привет, ' + this.name)
    }
}

function displayUserInfo(user) {
    console.log('Имя: ' + user.name + ', Возраст: ' + user.age + ', Email: ' + user.email)
}

user.greet()