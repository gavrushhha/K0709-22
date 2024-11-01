class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getSalary() {
        return this.baseSalary * 12;
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    getSalary() {
        return super.getSalary() + this.bonus;
    }
}

class Developer extends Employee {
    constructor(name, baseSalary, overtime) {
        super(name, baseSalary);
        this.overtime = overtime;
        this.overtimeRate = 1.5;
    }

    getSalary() {
        const overtimePay = this.overtime * this.overtimeRate * this.baseSalary / 8;
        return super.getSalary() + overtimePay;
    }
}

const manager = new Manager("John", 100000, 20000);
const developer = new Developer("Alice", 80000, 10);

console.log(`Зарплата менеджера: ${manager.getSalary()}`);
console.log(`Зарплата разработчика: ${developer.getSalary()}`);