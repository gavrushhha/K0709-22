// 2
function Product(name, price){
    this.name = name
    this.price = price
}

function ShoppingCart(){
    this.products = []
}

ShoppingCart.prototype.addProduct = function(pr) {
    this.products.push(pr)
}

ShoppingCart.prototype.removeProduct = function(pr) {
    index = this.products.indexOf(pr)
    this.products.splice(index, 1)
}

ShoppingCart.prototype.getTotalPrice = function() {
    sum = 0
    for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].price
    }
    return sum
}

ShoppingCart.prototype.checkout = function(){
    console.log(`Цена: ${this.getTotalPrice()}`)
    console.log('Продукты:')
    for (let i = 0; i < this.products.length; i++) {
        console.log(`${i+1})`, this.products[i].name)
    }
    this.products = []
}

let pr1 = new Product('картопля', 100)
let pr2 = new Product('банана', 50)
let pr3 = new Product('оранжевый', 70)
let cart = new ShoppingCart()
cart.addProduct(pr1)
cart.addProduct(pr2)
cart.addProduct(pr3)
console.log(cart.getTotalPrice())
console.log(cart.products)
cart.checkout()
console.log(cart.products)