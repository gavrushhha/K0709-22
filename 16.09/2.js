class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }
}

ShoppingCart.prototype.addProduct = function(product, quantity) {
    this.products.push({product, quantity});
}

ShoppingCart.prototype.removeProduct = function(product) {
    this.products = this.products.filter(item => item.product !== product);
}

ShoppingCart.prototype.getTotalPrice = function() {  
    let totalPrice = 0;
    for (let item of this.products) {
        totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
}

ShoppingCart.prototype.checkout = function() {  
    for (let item of this.products) {
        console.log(`Товар: ${item.product.name}, Количество: ${item.quantity}, Цена за единицу: ${item.product.price}`);
    }
    console.log(`Общая сумма: ${this.getTotalPrice()}`);
    this.products = [];
    console.log("Корзина очищена.");
}


let prod1 = new Product('Яблоко', 50);
let prod2 = new Product('Хлеб', 30);
let prod3 = new Product('Молоко', 60);


let cart = new ShoppingCart();

cart.addProduct(prod1, 3); 
cart.addProduct(prod2, 2); 
cart.addProduct(prod3, 1); 

cart.removeProduct(prod1);

cart.checkout();
