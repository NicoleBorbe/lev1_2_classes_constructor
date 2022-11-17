class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        return `${this.name} is ${this.age} years old.`;
    }
}
let emanuela = new Person("Emanuela", 18);
console.log(emanuela.info());


