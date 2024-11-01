class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.role = 'user';
    }

    login() {
        console.log(`Пользователь ${this.name} вошел в систему`);
    }

    logout() {
        console.log(`Пользователь ${this.name} вышел из системы`);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
        this.role = 'admin';
    }

    deleteUser(user) {
        console.log(`Пользователь ${user.name} был удален администратором ${this.name}`);
    }
}

const user1 = new User('Иван', 'ivan@e.com');
const user2 = new User('Мария', 'maria@e.com');
const admin = new Admin('Анна', 'anna@e.com');

user1.login();
user2.login();
admin.deleteUser(user1);
user1.logout();
user2.logout();
admin.login();
admin.logout();
