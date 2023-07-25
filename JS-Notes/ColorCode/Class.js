// intoduced in ES6 to provide a cleaner way to follow OOPs
// JS follows a prototype based inheritance model
// Before classes , we had constructor functions to implement OOPs in JS

//Now let's say we want to add a new function to the Pen constructor. 
//To do this we need to add the function into the prototype property of Pen



function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(pen1);

Pen.prototype.tellName = () =>{
    console.log(`my name is ${this.name}`)
}

Pen.prototype.sayName = function (){
    console.log(`my name is ${this.name}`)
}

pen1.tellName();
pen1.sayName();
console.log(Pen)
console.log(pen1);
