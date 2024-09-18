class Expresison {
    constructor(num1, num2, operator) {
        this.num1 = num1
        this.num2 = num2
        this.operator = operator
    }

    evaluate() {
        switch (this.operator) {
            case '+':
                return this.num1 + this.num2
            case '-':
                return this.num1 - this.num2
            case '*':
                return this.num1 * this.num2
            case '/':
                if (this.num2 === 0) {
                    throw new Error('Деление на ноль невозможно')
                }
                return this.num1 / this.num2
            default:
                throw new Error('Недопустимый оператор')
        }
    }

    toString() {
        try {
            return `${this.num1} ${this.operator} ${this.num2} = ${this.evaluate()}`
        } catch (e) {
            return e.message
        }
    }
}

class Addition extends Expresison {
    constructor(num1, num2) {
        super(num1, num2 ,'+')
    }
}

class Subtraction extends Expresison {
    constructor(num1, num2) {
        super(num1, num2 ,'-')
    }
}

class Multiplication extends Expresison {
    constructor(num1, num2) {
        super(num1, num2 ,'*')
    }
}

class Division extends Expresison {
    constructor(num1, num2) {
        super(num1, num2 ,'/')
    }
}

expr = new Expresison(1, 0, '/')
add = new Addition(1, 1)
sub = new Subtraction(3, 5)
mult = new Multiplication(3, -2)
div = new Division(10, 1.5)

console.log(expr.toString())
console.log(add.toString())
console.log(sub.toString())
console.log(mult.toString())
console.log(div.toString())
console.log(div.evaluate())
console.log(expr.toString())