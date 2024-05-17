// var select1 = document.getElementById("select1");

// function fun1(){
//     console.log(select1);
// }

// var select2 = document.getElementById("select2");
// var box1 = document.getElementById("box1");

// function fun2(){
//     box1.style.transition = "all 2s ease-in-out";
//     box1.style.backgroundColor = select2;
//     // box1.style.borderRadius = "50%";
//     // box1.style.border = "15px solid red";
//     if(select2 == "lightgreen"){

//     }
// }

// function add(a,b){
//     return 'hello';
//     // return a+b;
//     // return ['Hello', a+b];
// }

// var a = add(10,20);
// console.log("sum:- "+a);

// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// var num3 = +prompt("Enter a number");

// function max(num1, num2, num3){
//     if(num1>num2 && num1>num3){
//         return num1;
//     }else if(num2>num1 && num2>num3){
//         return num2;
//     }else{
//         return num3;
//     }
// }

// var d = max(num1, num2, num3);

// document.write(d);

// var a = document.getElementById("num1").value;
// var b = document.getElementById("num2").value;
// var c = document.getElementById("num3").value;

// function max_display() {
//     var ans = max(a, b, c);
//     console.log("Max number is :- " + ans);
// }

// function max() {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// recursion function

// function fun1(){
//     console.log("hello");
//     fun1();
// }

// fun1();

var ans = Math.trunc(Math.random() * 10) + 1;
var chances = 3;
function guess_num() {
    var userInput = +prompt("Enter Your Number");

    if (chances < 1) {
        alert("Game Over");
        console.log("Game Over");
        console.log("The correct number is " + ans);
    } else {
        if (userInput > 10) {
            console.log("Number should be less than 10");
            chances--;
            guess_num();
        } else if (userInput > ans) {
            console.log("Number should be less than " + userInput);
            chances--;
            guess_num();
        } else if (userInput < ans) {
            console.log("Number should be greater than " + userInput);
            chances--;
            guess_num();
        } else {
            console.log("You have guess the correct Number");
        }
    }
}

guess_num();