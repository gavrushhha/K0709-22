class Pet {
    eat() {
        console.log("Животное ест");
    }

    sleep() {
        console.log("Животное спит");
    }

    makeSound() { }
}

class Dog extends Pet {
    makeSound() {
        console.log("Собака лает");
    }
}

class Cat extends Pet {
    makeSound() {
        console.log("Кошка мяукает");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.eat();
dog.makeSound();
dog.sleep();

console.log('---------------------');

cat.eat();
cat.makeSound();
cat.sleep();
