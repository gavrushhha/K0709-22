class Pet {
    constructor() {
        if (this.constructor == Pet) {
            throw new Error();
        }
    }

    eat() {
        console.log(`Животное ест.`);
    }

    makeSound() {
        console.log(`Животное произносит звук.`);
    }
}

class Dog extends Pet {
    makeSound() {
        console.log(`Собака лает.`);
    }

    sleep() {
        console.log(`Собака спит.`);
    }
}

class Cat extends Pet {
    makeSound() {
        console.log(`Кошка мяукает.`);
    }

    sleep() {
        console.log(`Кошка спит.`);
    }
}

let cat1 = new Cat();

let dog1 = new Dog();
let dog2 = new Dog();

cat1.makeSound();
cat1.eat();
cat1.sleep();
dog1.makeSound();
dog1.eat();
dog1.sleep();
dog2.makeSound();
dog2.eat();
dog2.sleep();   
