const user = {
  name: "Михаил",
  age: 18,
  email: "Mich***.******@yandex.ru",

  greet() {
    console.log(`Привет, ${this.name}!`);
  },
};


function displayUserInfo(user) {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`)
}


user.greet();
