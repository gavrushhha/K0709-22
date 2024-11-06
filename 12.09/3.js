const user = {
    name: "A",
    age: 19,
    email: "dar"
};

function displayUserInfo(user) {
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

function greet(user) {
    console.log(`Привет, ${user.name}!`);
}

console.log(displayUserInfo(user));
greet(user);