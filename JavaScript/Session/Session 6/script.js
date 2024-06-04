// nested if

function check(){
    var num1 = Number(document.getElementById('num1').value);
    var result = document.getElementById("result");

    if(num1>=0){
        if(num1%2 == 0){
            result.innerHTML = num1 + " is positive and even.";
        }else{
            result.innerHTML = num1 + " is positive and odd.";
        }
    }else{
        if(num1%2 == 0){
            result.innerHTML = num1 + " is negative and even.";
        }else{
            result.innerHTML = num1 + " is negative and odd.";
        }
    }
}

// Switch Case

function fun1(){
    var num2 = Number(document.getElementById("num2").value);
    var demo = document.getElementById("demo");

    switch(num2){
        case 1:
            demo.innerHTML = "Monday";
            break;
        case 2:
            demo.innerHTML = "Tuesday";
            break;
        case 3:
            demo.innerHTML = "Wednesday";
            break;
        case 4:
            demo.innerHTML = "Thursday";
            break;
        case 5:
            demo.innerHTML = "Friday";
            break;
        case 6:
            demo.innerHTML = "Saturday";
            break;
        case 7:
            demo.innerHTML = "Sunday";
            break;
        default:
            demo.innerHTML = "Invalid Number";
            break;
    }
}

// var num3 = +prompt("Enter a number 1:");
// var num4 = +prompt("Enter a number 2:");
// var sym = prompt("Enter the symbol(+,-,*,/)");

// switch(sym){
//     case "+":
//         document.write(num3 + sym +num4+ "=" + (num3+num4));
//         break;
//     case '-':
//         document.write(num3 + sym +num4+ "=" +  (num3-num4));
//         break;
//     case '*':
//         document.write(num3 + sym +num4+ "=" +  (num3*num4));
//         break;
//     case '/':
//         document.write(num3 + sym +num4+ "=" +  (num3/num4));
//         break;
//     default:
//         document.write("Error");
// }


// NON Primitive data types
// 1. Array
// 2. Object

// Array

var arr1 = ['abc', 'hello', 'js', 56, 10.5, true];

console.log(arr1[6]);

var arr2 = Array('abc', 'hello', 'js');

console.log(arr2[0]);

var arr3 = ['a', 'b', ['c', 'd', ['h', 'i', ['j']]]];

console.log(arr3);
console.log(arr3[2][2][2][0]);
console.log(arr3[2][0]+ arr3[2][2][1]+ arr3[2][1]);