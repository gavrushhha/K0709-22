class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    clone(){
        return new Person(this.name, this.age, this.address);
    }
}

let person1 = new Person('Арина', 18, 'Москва');
console.log(person1);
clonePerson = person1.clone();
console.log(clonePerson);
