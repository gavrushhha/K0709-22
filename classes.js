// 1
class User {
    constructor(name, email, role = 'user') {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    login() { console.log(`Пользователь ${this.name} вошел в систему`) }
    logout() { console.log(`Пользователь ${this.name} вышел из системы`) }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email, 'admin');
    }
    deleteUser(user) {
        console.log(`Пользователь ${user.name} был удален администратором ${this.name}`);
    }
}

const user1 = new User("Ivan", "ivan@example.com");
const user2 = new User("Ann", "ann@example.com");
const admin1 = new Admin("Sam", "sam@example.com");

user1.login();
user1.logout();

user2.login();
user2.logout();

admin1.login();
admin1.deleteUser(user1);
admin1.logout();


// 2
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = {};
    }
    addProduct(product, quantity) {
        if (this.items[product.name]) {
            this.items[product.name].quantity += quantity;
        } else {
            this.items[product.name] = { product, quantity };
        }
        console.log(`Добавлено ${quantity} ${product.name}(ов) в корзину.`);
    }
    removeProduct(product) {
        if (this.items[product.name]) {
            delete this.items[product.name];
            console.log(`Товар ${product.name} удален из корзины.`);
        } else {
            console.log(`Товар ${product.name} не найден в корзине.`);
        }
    }
    getTotalPrice() {
        let total = 0;
        for (const item of Object.values(this.items)) {
            total += item.product.price * item.quantity;
        }
        return total;
    }
    checkout() {
        if (Object.keys(this.items).length === 0) {
            console.log("Корзина пуста.");
            return;
        }
        console.log("Список покупок:");
        for (const item of Object.values(this.items)) {
            console.log(`${item.product.name}: ${item.quantity} шт. по цене ${item.product.price} руб.`);
        }
        const totalPrice = this.getTotalPrice();
        console.log(`Общая сумма к оплате: ${totalPrice} руб.`);
        this.items = {};
    }
}

const apple = new Product("Яблоко", 50);
const banana = new Product("Банан", 30);
const orange = new Product("Апельсин", 40);

const cart = new ShoppingCart();

cart.addProduct(apple, 3);
cart.addProduct(banana, 2);
cart.addProduct(orange, 5);

console.log(`Итоговая сумма: ${cart.getTotalPrice()} руб.`);

cart.checkout();


// 3
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Книга "${book.title}" добавлена в библиотеку.`);
    }
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    listAllBooks() {
        if (this.books.length === 0) {
            console.log("Библиотека пуста.");
            return;
        }
        console.log("Список всех книг в библиотеке:");
        this.books.forEach(book => {
            console.log(`${book.title} автор: ${book.author}, страниц: ${book.pages}`);
        });
    }
}
class LibraryUser {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            console.log(`${this.name}, вы не можете взять больше 3 книг.`);
            return;
        }
        this.borrowedBooks.push(book);
        console.log(`${this.name} взял(а) книгу "${book.title}".`);
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} вернул(а) книгу "${book.title}".`);
        } else {
            console.log(`${this.name} не имеет книги "${book.title}".`);
        }
    }
    listBorrowedBooks() {
        if (this.borrowedBooks.length === 0) {
            console.log(`${this.name}, у вас нет взятых книг.`);
            return;
        }
        console.log(`${this.name}, вы взяли следующие книги:`);
        this.borrowedBooks.forEach(book => {
            console.log(`${book.title} автор: ${book.author}`);
        });
    }
}
const library = new Library();
const book1 = new Book("1984", "Джордж Оруэлл", 328);
const book2 = new Book("Мастер и Маргарита", "Михаил Булгаков", 448);
const book3 = new Book("Война и мир", "Лев Толстой", 1225);
const book4 = new Book("Фауст", "Иоганн Вольфганг фон Гёте", 384);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

const user = new LibraryUser("Алексей");
user.borrowBook(book1);
user.borrowBook(book2);
user.borrowBook(book3);
user.borrowBook(book4);
user.listBorrowedBooks();

user.returnBook(book2);
user.listBorrowedBooks();


// 4
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
        this.total = 0;
    }
    addProduct(product, quantity) {
        this.products.push({ product, quantity });
        console.log(`Добавлено ${quantity} шт. "${product.name}" в заказ.`);
    }
    calculateTotal() {
        this.total = this.products.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
    }
    printOrder() {
        console.log(`Заказ для: ${this.customer.name} (${this.customer.email})`);
        console.log("Товары в заказе:");
        this.products.forEach(item => {
            console.log(`- ${item.quantity} шт. "${item.product.name}" по цене ${item.product.price} руб.`);
        });
        console.log(`Общая стоимость заказа: ${this.total} руб.`);
    }
}
const customer1 = new Customer("Иван Иванов", "ivan@example.com");
const customer2 = new Customer("Мария Петрова", "maria@example.com");
const product1 = new Product("Ноутбук", 50000);
const product2 = new Product("Смартфон", 20000);
const product3 = new Product("Наушники", 3000);
const order1 = new Order(customer1);

order1.addProduct(product1, 1);
order1.addProduct(product2, 2);
order1.calculateTotal();
order1.printOrder();
console.log("\n");

const order2 = new Order(customer2);
order2.addProduct(product3, 5);
order2.calculateTotal();
order2.printOrder();


// 5
class Pet {
    eat() {
        console.log("Животное ест");
    }
    makeSound() {
        throw new Error("Метод makeSound() должен быть переопределен в классе-наследнике");
    }
    sleep() {
        console.log("Животное спит");
    }
}
class Dog extends Pet {
    makeSound() {
        console.log("Собака лает");
    }
}
class Cat extends Pet {
    makeSound() {
        console.log("Кошка мяукает");
    }
}

const dog = new Dog();
const cat = new Cat();
dog.eat();
dog.makeSound();
dog.sleep();

console.log("\n");
cat.eat();
cat.makeSound();
cat.sleep();


// 6
class Expression {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    evaluate() {
        throw new Error("Метод evaluate() должен быть переопределен в классе-наследнике");
    }
    toString() {
        return `${this.a} ? ${this.b} = ?`;
    }
}
class Addition extends Expression {
    evaluate() {
        return this.a + this.b;
    }
    toString() {
        return `${this.a} + ${this.b} = ${this.evaluate()}`;
    }
}
class Subtraction extends Expression {
    evaluate() {
        return this.a - this.b;
    }
    toString() {
        return `${this.a} - ${this.b} = ${this.evaluate()}`;
    }
}
class Multiplication extends Expression {
    evaluate() {
        return this.a * this.b;
    }
    toString() {
        return `${this.a} * ${this.b} = ${this.evaluate()}`;
    }
}
class Division extends Expression {
    evaluate() {
        if (this.b === 0) {
            throw new Error("Деление на ноль");
        }
        return this.a / this.b;
    }
    toString() {
        return `${this.a} / ${this.b} = ${this.evaluate()}`;
    }
}

const addition = new Addition(3, 5);
const subtraction = new Subtraction(10, 4);
const multiplication = new Multiplication(6, 7);
const division = new Division(20, 4);

console.log(addition.toString());
console.log(subtraction.toString());
console.log(multiplication.toString());
console.log(division.toString());
