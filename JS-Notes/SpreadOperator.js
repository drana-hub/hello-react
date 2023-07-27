/*
Spread Operator is used for cloning an array, it is actually the right way
as it will not change the original array
let a = [1,2,3]
let b = [...a]


With Spread, converting different data types to an Array has never been easier 👏

#3. String to Array
When we spread a string, it will return an array of individual substrings.
const string = 'hi';
const array = [...string];

Arguments to Array
Arguments is an array-like object which can be converted to array with spread syntax






*/





const a1= [1,2]
const a2 = [3,4]
const attemptToMerge = [a1, a2];
let p = a1.concat(a2)
let q = [...a1, ...a2]
let r = [a1, ...a2]
// console.log(p)
// console.log(q)
// console.log(r)
// console.log(a1)
// console.log(a2)
// console.log(attemptToMerge)

let array = [1, 2, 3, 4, 5];
var minimum = Math.min(...array);
var maximum = Math.max(1,2,3,4,5);
console.log(minimum);
console.log(maximum);


function names() {
    //console.log(arguments);
    //console.log('hi')
    // Arguments(4)['samantha', 'sam']
  
    //arguments.map(name => `hi ${name}`);
    // ❌ TypeError: arguments.map is not a function
  }
  
  names('samantha', 'sam');

