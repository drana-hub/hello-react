/*
stuff goes in , stuff comes out in a factory
Factory function is just a function that creates object and returns them
say you want to create similar multiple object
its kind of a design pattern in js

Imp Note: 
In Js, any function can return a new object
When it's not a constructor function or class, it's called a factory function


FF: 
a normal js function which returns an object

CF:
it is also a normal function but it starts with capital letter
it is called with a new Keyword

*/

// anonymous functions dont refer to 'this' as where they are called from
// they refer to 'this' acc to the functional context where they are defined in

// in walk, while accessing 'this' what is the value of this where I have been defined

function ff(name) {
  //console.log(this)
  return {
    name,
    talk(){
        console.log(`I am ${this.name}`)
    },
    walk : () => {
        console.log(`${this.name} walks`)
    }
  };
}

let p = ff('ron');
let q = ff('tus');
p.talk();
q.talk();
p.walk();
q.walk();