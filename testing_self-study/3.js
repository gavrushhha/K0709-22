const user = {
    name: "Daniil",
    age: 17,
    email: "daniil@example.com",
    greet: function greet() {
        console.log(`Привет, ${this.name}!`);
    }
};

function displayUserInfo(user) {
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

function greet(user) {
    console.log(`Привет, ${user.name}!`);
}

console.log(displayUserInfo(user));
user.greet();