/*
* Primitives get assigned by values, Objects get assigned by reference
In JS, we have two types of values to a variable:

1. Primitives - Number, Boolean, String, Null, Undefined
const myName = 'rony'

* Primitives are the values which already exist in the memory
* New Primitives are need not to be created, they are the value itself

If the value on the right side of a variable is a primitive, 
myName ----> 'rony'

2. Objects - Object, Array, Date, Function, Regex
const myCar = {}

If the value on the right side of a variable is a Object, 
js creates a new object {} with some address say(123432)
myName ----> 123432
here var points to the loc of the object in our computer memory

Variables that are assigned a non-primitive value are given a reference to that value. 
That reference points to the object’s location in memory. 
The variables don’t actually contain the value.

*/


var a = [1,2,4]
var b = a;

a = [2,3]
console.log(b)
console.log(a)