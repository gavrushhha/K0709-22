class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addProduct(product, quantity) {
        this.cart.push({ product, quantity });
    }

    removeProduct(product) {
        this.cart = this.cart.filter(item => item.product !== product);
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    checkout() {
        if (this.cart.length === 0) {
            console.log('Корзина пуста');
            return;
        }

        console.log('Список покупок:');
        this.cart.forEach(item => {
            console.log(`${item.product.name} - ${item.quantity} шт. - ${item.product.price * item.quantity} руб.`);
        });

        const totalPrice = this.getTotalPrice();
        console.log(`Общая сумма: ${totalPrice} руб.`);

        this.cart = [];
        console.log('Корзина очищена');
    }
}

const apple = new Product('Яблоко', 50);
const milk = new Product('Молоко', 80);
const bread = new Product('Хлеб', 30);

const cart = new ShoppingCart();

cart.addProduct(apple, 3);
cart.addProduct(milk, 2);
cart.addProduct(bread, 1);

console.log(`Общая стоимость: ${cart.getTotalPrice()} руб.`);

cart.removeProduct(milk);

console.log(`Общая стоимость после удаления молока: ${cart.getTotalPrice()} руб.`);

cart.checkout(); 
