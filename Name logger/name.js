// To print to the console
console.log('Welcome to JavaScript');

// To print to the web browser
document.write('Hello World');

// Modern way of using document.write()
const newWay = document.createElement("h1");
newWay.textContent = "Hello World!";
document.body.appendChild(newWay);

// Variables
// The three variables are var, let and const
var x = 10;
console.log(x);

var x = 25;
console.log(x);

let y = 50;
document.write(y);

// Write a script that logs your name and age to the console
let myName = "Don-Michael";
const myAge = 21;
console.log(`Name: ${myName}\nAge: ${myAge}`);// I made use of temperal literals (${}) and new line property (\n)

// To put quotes in a string you use a backslash (\)
let sayHello = 'Hello! \'I am Don-Michael\'';

//Data Types
// Number, String, Boolean, Undefined, Null, Arrays
// Number
let yourAge = 32;
// String
let yourName = "Prolific"
// Boolean
var isActive = true;
// Undefined 
let z;
// Null
let failure = null;
// Arrays
let fruits = ["Apple", "Strawberry"];

// Alert
alert("Once more welcome to the most popular programming language");

//camelCasing - for naming of variables
// myAge, myNumber, theAddressOfThePlace

function displayName(){
    const input = document.getElementById('nameInput').value;
    const result = document.getElementById('result');

    if(input.trim() === ""){
        result.textContent = "Please input your name";
    }else{
        result.textContent = `Your name is: ${input}`;
    }
}

// Operators
// Arithmetic operator
let x = 20 + 5; // Addition
let x = 20 - 5; // Subtraction
let x = 20 * 5; // Multiplication
let x = 20 / 5; // Division
let x = 20 % 5; // Modulus
let a = 10; a++;// Incrementation

// Assignment operators
x = y;
x += y;
x = x + y;
x -= y;

// Comparison operators
// It is used to find out if values or variables are different; It returns true or false
let num = 10;
console.log(num == 8);

// Logical operators or Boolean operators
// && Returns true, if both operands are true
// || Returns true, if one of the operands is true
// ! Returns true, if both operands are false, and false if the operand is true

console.log((4 > 2)&&(10 < 15));

// Ternary operator
// variable = (condition) ? value 1 : value 2;

// String operators
let myString1 = "I am enjoying this ";
let myString2 = "UBL Bootcamp";
console.log(myString1 + myString2);

// Statement
// If Statement
if (condition) {
    // statements
}

// Else statement
if(expression){
    //executed if condition is true
}else{
    // executed if condition is false
}

// The result of an exam will be determined as follows:
// If the score is 
// 80 and above => Excellent
// 40 - 87 => Good
// 0 - 39 => fail

// Complete the code to output the corresponding result (Excellent, Good and Fail)

if (expression){
    // Statement
}else if (condition){
    // Statement
}else{
    // Statement
}

// Switch Statement 
switch (expression){
    case n1:
        statements
        break;
    case n2:
        statements
        break;
    default:
        statements
}

// For Loop
 for (i = 0; i <= 2; i++){
     //code block to be executed
 }

// While loop (It checks the condition before running)
while(condition){
    //code block
}

// Do while loop (It will run once then check the condition)
let k = 0;
do {
    console.log(z);
    k++
} while (k <= 5);

let food = new Array("Rice", "Beans", "Yam");
let foods = food[2];
food.length