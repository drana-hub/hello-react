/*
Inheritance: 
Used to reduce code duplication

In JS:
It can be donw with or without classes

Classes: 
every Class keyword is a constructor function in javascript




*/

// Classes

class Person {
    constructor(name){
        this.name = name;
        this.t = this.talk;
        console.log('hey')
        console.log(this);
    };
    talk(){
        return 'talking';
    };
}
let p = Person;
console.log(p)
const me = new Person();
const u = new Person();

console.log(me)
console.log(u)


















































