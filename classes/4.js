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
        this.totalAmount = 0;
    }

    addProduct(product, quantity) {
        this.products.push({ product, quantity });
        this.calculateTotal();
    }

    calculateTotal() {
        this.totalAmount = this.products.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    printOrder() {
        console.log(`Заказ для: ${this.customer.name} (${this.customer.email})`);
        console.log('Товары в заказе:');
        this.products.forEach(item => {
            console.log(`${item.product.name} — ${item.quantity} шт.по ${item.product.price} руб. (Итого: ${item.product.price * item.quantity} руб.)`);
        });
        console.log(`Общая стоимость заказа: ${this.totalAmount} руб.`);
        console.log('-----------------------------------');
    }
}

const customer1 = new Customer('Алексей', 'alexey@example.com');
const customer2 = new Customer('Мария', 'maria@example.com');

const product1 = new Product('Ноутбук', 50000);
const product2 = new Product('Смартфон', 30000);
const product3 = new Product('Планшет', 20000);

const order1 = new Order(customer1);
order1.addProduct(product1, 1);
order1.addProduct(product2, 2);

const order2 = new Order(customer2);
order2.addProduct(product3, 3);
order2.addProduct(product1, 1);

order1.printOrder();
order2.printOrder();
