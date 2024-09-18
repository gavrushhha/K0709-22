function Customer(name, email) {
    this.name = name
    this.email = email
}

function Product(name, price) {
    this.name = name
    this.price = price
}

function Order(products = [], customer) {
    this.products = products
    this.customer = customer
    this.totalPrice = 0
    products.forEach(product => {
        this.totalPrice += product.price
    })
}

Order.prototype.calculateTotal = function() {
    this.products.forEach(product => {
        this.totalPrice += product.price
    })
    return this.totalPrice
}

Order.prototype.addProduct = function(product, quantity = 1) {
    for (let i = 0; i < quantity; i++) {
        this.products.push(product)
    }
    this.totalPrice += this.calculateTotal()
    return this
}

Order.prototype.printOrder = function() {
    console.log(`Заказ для ${this.customer.name} (${this.customer.email}):`)
    console.log('Товары:')
    this.products.forEach((product, index) => {
        console.log(`${index+1})`, `${product.name} ($${product.price})`)
    })
    console.log(`Цена: $${this.totalPrice}`)
    return this
}

let user1 = new Customer('1', '1@mail.ru')
let user2 = new Customer('2', '2@mail.ru')
let product1 = new Product('p1', 10)
let product2 = new Product('p2', 15)
let product3 = new Product('p3', 87)
let product4 = new Product('p4', 1)
let order1 = new Order([product1, product2, product3], user1)
let order2 = new Order([product3], user2)
order2.addProduct(product4)
console.log(order1.calculateTotal())
order1.printOrder()
console.log()
order2.printOrder()
