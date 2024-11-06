class User{
    constructor(name, email, role){
        this.name = name;
        this.email = email;
        this.role = role;
    }

    login(){
        console.log(`Пользователь ${this.name} вошел в систему`);
        return this;
    }

    logout(){
        console.log(`Пользователь ${this.name} вышел в системы`);
        return this;
    }
}

class Admin extends User{
    constructor(admin_name){
        super(admin_name);
    }

    deleteUser(user){
        console.log(`Пользователь ${user} был удален администратором ${this.name}`);
    }
}

user1 = new User('a', 'aa', 'user')
admin1 = new Admin('b')
user1.login().logout()
admin1.deleteUser('a')
