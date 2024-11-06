class Expression {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    evaluate() {
        switch (this.operation) {
            case '+':
                return this.a + this.b;
            case '-':
                return this.a - this.b;
            case '*':
                return this.a * this.b;
            case '/':
                if (this.b === 0) {
                    return "Ошибка: деление на ноль!";
                }
                return this.a / this.b;
            default:
                return "Неизвестная операция";
        }
    }

    toString() {
        return `${this.a} ${this.operation} ${this.b} = ${this.evaluate()}`;
    }
}


let expr1 = new Expression(3, 5, '+');
console.log(expr1.toString()); 

let expr2 = new Expression(10, 7, '-');
console.log(expr2.toString()); 

let expr3 = new Expression(4, 6, '*');
console.log(expr3.toString()); 

let expr4 = new Expression(12, 4, '/');
console.log(expr4.toString()); 

let expr5 = new Expression(12, 0, '/');
console.log(expr5.toString()); 
