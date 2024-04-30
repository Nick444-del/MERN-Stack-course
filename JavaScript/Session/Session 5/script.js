// Logical Operators

// && AND
// || OR
// ! NOT

// -------AND Operator-----------
// T T = T
// T F = F
// F T = F
// F F = F

// -------OR Operator-----------
// T T = T
// T F = T
// F T = T
// F F = F

// -------NOT Operator-----------
// T = F
// F = T

var a = 10;
var b = 20;

// console.log(a>=5 && b>=10);
// console.log(a>=5 && b<=10);
// console.log(a==b || b>=10);
// console.log(!(a==10));
// console.log(!(a==10) && b>=10);
// console.log(a>=5 && b>=10 || b>=5);

// console.log(typeof(typeof(1+true)).length);

// Conditional Statements

// 1. if
// 2. if-else
// 3. if...else if...else

// Syntax
// if(true){}else{}

// var age = +prompt("Enter your age: ");
// var a = +prompt("Enter a number: ");

// if(a>50){
//     console.log("Above 50");
// }else if(a>40){
//     console.log("Above 40");
// }else if(a>30){
//     console.log("Above 30");
// }else if(a>20){
//     console.log("Above 20");
// }else if(a>10){
//     console.log("Above 10");
// }else{
//     console.log("Below 10");
// }

// if(age >= 18 && age <= 80){
//     console.log("You are eligible to vote");
// }else if(age>=80){
//     console.log("Mar ja dharti ke boje!!!");
// }else{
//     console.log("You are not eligible to vote");
// }

var num1 = document.getElementById("num1");
var oput = document.getElementById("oput");

function verify(){
    if(num1.value>0){
        oput.innerHTML = num1.value +" is Positive"
    }else{
        oput.innerHTML = num1.value +" is Negative"
    }
}

var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");

function check1(){
    if(num2.value>num3.value){
        oput.innerHTML = num2.value +" is greater than "+ num3.value
    }else if(num2.value<num3.value){
        oput.innerHTML = num3.value +" is greater than "+ num2.value;
    }
}

var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");

function higher(){
    if(num4.value>num5.value && num4.value>num6.value){
        oput.innerHTML = num4.value;
    }else if(num5.value>num4.value && num5.value>num6.value){
        oput.innerHTML = num5.value;
    }else if(num6.value>num4.value && num6.value>num5.value){
        oput.innerHTML = num6.value;
    }else{
        oput.innerHTML = "Error"
    }
}

var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");

function mid(){
    if(num7.value>num8.value && num7.value<num9.value){
        oput.innerHTML = num7.value;
    }else if(num8.value>num7.value && num8.value<num9.value){
        oput.innerHTML = num8.value;
    }else if(num9.value>num7.value && num9.value<num8.value){
        oput.innerHTML = num9.value;
    }
}