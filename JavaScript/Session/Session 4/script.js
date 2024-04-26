// String slicing / indexing

// var name = "Hello";

// console.log(name.length);
// console.log(name[4]);

// var name1 = prompt("Enter your name");

// console.log(name1[0]);
// var b = name1.length - 1;
// console.log(name1[b]);

// getAttribute
// setAttribute

// function fun(){
//     var a = document.getElementById("abc");
//     a.setAttribute("class", "pqr");
// }

function swap() {
    var i1 = document.getElementById("img1");
    var i2 = document.getElementById("img2");
    // i1.setAttribute("src", "./jack-prew-84MNIMBEzb4-unsplash.jpg");
    // i2.setAttribute("src", "./horserat-x3Dy9xDWmVg-unsplash.jpg");

    var temp1 = i1.getAttribute("src"); // Getting and setting the value of first image
    var temp2 = i2.getAttribute("src"); // Getting and setting the value of second image

    i1.setAttribute("src", temp2);
    i2.setAttribute("src", temp1);
}

function fun2(){
    // var a = document.getElementsByClassName("abc1");
    // console.log(a[2].innerHTML);
    // a[2].style.background = "aqua";

    // var b = document.getElementsByTagName("h1");
    var b = document.getElementsByTagName("h1")[0];
    var b1 = document.getElementsByTagName("h1")[1];
    var b2 = document.getElementsByTagName("h1")[2];
    // b[0].style.background = "aqua";

    console.log(b.innerHTML);
    b.style.background = "fuchsia";
    b.style.fontFamily = "Helvetica";
    b1.style.background = "tomato";
    b.style.fontFamily = "YaHei Consolas Hybrid";
    b2.style.background = "chocolate";
    b2.style.fontFamily = "Devanagari";
}

// Operators

// 1. Arithmetic operators
// +,-,*,/,** => exponent, % => modulus
// var a = 20;
// var b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(2**6);

// 2. Assigment operators
// =, +=, -=, *=, /+, %=
// var a=10
// a %= 1
// console.log(a)
// var a = 10;
a += 4;
a -= 2;
a *= 2;
a /= 2;
// console.log(a);

// 3. Comparison operators
// ==,===,!=,!==,>,<,>=,<=
// === checks value and data type.
// == only check's value
// != not equal
// !== not equal value and data type
// > greater than
// < less than
// >= greater than or equal
// <= less than or equal

var a = 20;
var b = 20;
console.log(a===b);
console.log(a==b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
