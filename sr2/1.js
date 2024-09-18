// 1
class User {
    constructor(name, email, role = 'user') {
        this.name = name
        this.email = email
        this.role = role
    }

    login() {
        console.log(`Пользователь ${this.name} вошел в систему.`)
        return this
    }

    logout() {
        console.log(`Пользователь ${this.name} вышел из системы.`)
        return this
    }
}

class Admin extends User {
    constructor(name, email, role = 'admin') {
        super(name, email, role)
    }

    deleteUser(user) {
        console.log(`Пользователь ${user.name} был удален администратором ${this.name}.`)
        return this
    }
}

let user1 = new User('1', '11')
user1.login().logout()
let user2 = new User('2', '22')
user2.login()
let admin1 = new Admin('3', '33')
admin1.login().logout()
let admin2 = new Admin('4', '44')
admin2.login().deleteUser(user1).logout()
