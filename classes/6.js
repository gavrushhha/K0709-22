class Expression {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    evaluate() { }


    toString() { }
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
            throw new Error("Деление на ноль невозможно");
        }
        return this.a / this.b;
    }

    toString() {
        return `${this.a} / ${this.b} = ${this.evaluate()}`;
    }
}

const expressions = [
    new Addition(3, 5),
    new Subtraction(10, 4),
    new Multiplication(7, 6),
    new Division(8, 2),
];

expressions.forEach(item => {
    console.log(item.toString());
});
