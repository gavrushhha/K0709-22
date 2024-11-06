class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Order {
    constructor(customer) {
        this.customer = customer;
        this.products = [];
        this.total = 0;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

Order.prototype.addProduct = function (product, quantity) {
    this.products.push({ product, quantity });
}

Order.prototype.calculateTotal = function () {
    for (let item of this.products) {
        this.total += item.product.price * item.quantity;
    }
    return this.total;
}

Order.prototype.printOrder = function () {
    console.log(`Пользователь: ${this.customer.name}, Товары в заказе:`);
    this.products.forEach(item => {
        console.log(`${item.product.name} — ${item.quantity} шт. Цена за шт. - ${item.product.price} руб.`);
    });
    console.log(`Общая стоимость заказа: ${this.calculateTotal()} руб.`);
    console.log('\n');
}

let customer1 = new Customer('Иван', '1.com');
let customer2 = new Customer('Лена', '2.com');
let customer3 = new Customer('Дима', '3.com');

let product1 = new Product('Яблоко', 50);
let product2 = new Product('Банан', 70);
let product3 = new Product('Хлеб', 30);
let product4 = new Product('Молоко', 60);

let order1 = new Order(customer1);
order1.addProduct(product1, 6);
order1.addProduct(product2, 3);

let order2 = new Order(customer2);
order2.addProduct(product2, 3);
order2.addProduct(product3, 4);

let order3 = new Order(customer3);
order3.addProduct(product1, 1);
order3.addProduct(product4, 2);


order1.printOrder();
order2.printOrder();
order3.printOrder();
