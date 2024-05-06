// Object => key / value pair

var obj1 = [{
    name: "Nitin",
    age: 21,
    email: "n@n.com",
    hobby: "Coding",
    contact: [12152431261, 16313514713]
},
{
    name: "ABC",
    age: 23,
    email: "a@a.com",
    hobby: "Reading",
}]

// console.log(obj1);
// console.log(obj1["name"], obj1["email"]);
// console.log(obj1.age);

// document.write(obj1.name+"<br>");

// obj1.name = "ABC";

// document.write(obj1.name)

console.log(obj1[1].name);
console.log(obj1[0].contact[0]);
console.log(obj1[0].contact[1]);

// Loops
// 1. While loop
// 2. For loop
// 3. Do while loop

// => While Loop
// Step1: initialize
// Step2: condition
// Step3: iteration

// var i = 1;      // Initialize

// while(i<=10){   // Condition
//     console.log(i++); // Iteration
// }

// var n = 1;

// while(n<=15){
//     document.write(15+" * "+n+" = "+(15*n)+"<br>");
//     n++;
// }

// var m = +prompt("Enter your number:");
// var o = 1;

// while(o<=15){
//     document.write(m+" * "+o+" = "+(m*o)+"<br>");
//     o++;
// }

// var num1 = +prompt("Enter a value: ");
// var i = 1;

// while(i <= num1){
//     if(i%2 != 0){
//         document.write(i+ "<br>");
//     }
//     i++;
// }

// var num1 = +prompt("Enter a number: ");

// if(num1 < 100){
//     document.write("The enter value is below 100");
// }else if(num1%100 == 0){
//     document.write("The last 2 digit of the entered value should't be 00");
// }else if(num1 > 100){
//     var mod = num1%100
//     var i = 1;
//     while(i <= mod){
//         if(i%2 == 0){
//             document.write(i**2+"<br>");
//         }
//         i++;
//     }
// }

var arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var i = 0;

while(i < arr2.length){
    document.write(arr2[i]);
    console.log(arr2[i]);
    i++;
}