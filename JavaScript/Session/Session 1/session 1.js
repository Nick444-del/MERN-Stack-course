// document.write("<h1 style='color:aqua'>Hello user</h1>");
// document.writeln(8768);
// document.write(647.224);
// document.write(true);

// console.log('Hello user');
// console.log(92);
// console.log(672.67);
// console.log(true);

// alert('Hello user');
// alert(92);
// alert(672.67);
// alert(true);

// console.log(62+8);
// console.log(62-8);
// console.log(62*8);
// console.log(62/8);

// Data types
// 1. Primitive
// 2. non - primitive

console.log(typeof(typeof(873)));  // ⚠⚠⚠ Interview Question (Fist typeof function will find what the given data's type is (for eg 873), then it will convert it into a string like numbar, boolean etc. Then the second typeof function will identify the first's output and give the answer which is String.)


// Variable's

// var name = 'js';  // normal way to write a variable.
// console.log(name);

// var n1ame = 'js'; // can add number after first letter/alphabet.
// console.log(n1ame);

// var n%ame = 'js'; // cannot add any symbol in the variable.
// console.log(n%name);

// var _name = 'js'; // can add underscore at the beginning of the variable.
// console.log(_name);

var firstName = 'Hello User'; // camel case
// console.log(firstName);

var FirstName = 'Hello Useres'; //pascal case
// console.log(FirstName);

// Concanating the variable in javascript
var a = 'hello';
var b = 'user';

console.log(a +" "+ b);

var name = 'Nikhil';
var age = 23;

document.write("my name is "+name+" and my age is "+age);

console.log(3+3+"3"+3+3); // ⚠⚠⚠ Interview Question (What is the output? and why? The answer is 6333 because it will add the first two numbers and the third number is string, so it will add/concatenate them. The datatype of the given output is string. and the by adding the remaining two numbers will also give us a string output, it will give the output as 6333.)

console.log(3+3+true+3+3); // ⚠⚠⚠ Interview Question (What is the output? and why? The answer is 13 because it will add given numbers and the the given boolen value is converted in the number like true=1, false=0. and it will add them. The datatype of the given output is number. and the by adding the remaining two numbers will also give us a number output, it will give the output as 13.)

// Typecasting

var p = 24;
console.log(typeof p);
console.log(p);

var q = String(p);
console.log(typeof q);
console.log(q);

// Task
var e = "10"
var f = "20"
console.log("Sum = " + (Number(e) + Number(f)));

// Using HTML elements in JavaScript 

document.write("<h1 class='abc'><b>sum = "+ Number(e) + Number(f) +" </b></h1>");

console.log(3 + "3") // Interview Question - (Convert the given string into number without using Number() function. The answer is by add another + to the given equation it add the string into number. It can only be used in string to number. The equation will be console.log(3 + +"3");) 