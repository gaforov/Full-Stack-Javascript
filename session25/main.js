/* 
-> Even variable declared after console.log(), it will get pushed to the top of the line. 
-> This practice is called "Hoisting" in JS. Works with "var", not "let"
 */
number = 10;
console.log(number);
var number;

// difference between "==" and "==="
console.log(1 == '1'); // just value, checks if thier values match, auto-cast to different datatype applied when necessary. 
console.log(1 === '1'); // checks for value AND datatype as well.

/* diff between var and let 
-> var is function scopped
-> let is block scopped
 -> let along with const later introduced and preferred over var. 
 */

console.log(varNum);
var varNum; // works as undefined, no error

//  console.log(letNum);
//  let letNum; // ReferenceError, Error/Exception thrown
        
//  console.log(constNum);
// //  const constNum; // constant must be initialized. Compile Error(CE). 
// const constNum = 10; // RefError

function scopeTest(){
    if (1==1) {
        var varNumber
        varNumber = 20;
    }
    console.log(varNumber); // this works, var is a function-scope. 
    
    // if (1==1) {
    //     let letNumber
    //     letNumber = 30;
    // }
    // console.log(letNumber); // this doesn't work, let is not within the scope.
}
scopeTest()

// NaN => Not a Number

let number1 = 0;
console.log(number1 * number1); // 0
console.log(number1 / number1); // NaN
console.log(10 / 0); // Infinity; in Java it is Arithmetic Expection. 
console.log(Number('a')); // NaN

console.log('--------');
let number2 = Number('2')
if (number2 != NaN) { 
    let result = number2 * 30;
    console.log(result);
}else{
    console.log('invalid');
}
if (isNaN(number2)) {
    let result = number2 * 30;
    console.log(result);
}else{
    console.log('invalid');
}

// Calling a function inside another function. 
function sayHi(){
    console.log('Hi there!');
}

function greet(fn){
    console.log('before greet');
    fn()
}

greet(sayHi)

// Arrow functions in JS => you can dismiss curly brackets if only single line used

function sayHello(){
}
sayHello(() => console.log('Hello')) // not printing 'Hello', why?

// // these two are same
// function addition(){
// }

// let addition = () => {
// }


// pass by value vs pass by reference

let num1 = 40; // number is a value type
function changeValue(any){
    any = 100;
    console.log(any);
}

console.log(num1); // pass by value

changeValue(num1) // pass by reference



