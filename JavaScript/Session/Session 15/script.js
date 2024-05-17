// var box = document.getElementById("box");
// var ans = document.getElementById("ans");

// function start() {
//     box.addEventListener("mouseover", fun1);
// }

// function stop1() {
//     box.removeEventListener("mouseover", fun1);
// }

// function fun1() {
//     var a = Math.trunc(Math.random() * 255);
//     var b = Math.trunc(Math.random() * 255);
//     var c = Math.trunc(Math.random() * 255);
//     var color = "rgb(" + a + "," + b + "," + c + ")";
//     box.style.backgroundColor = color;
//     ans.innerHTML = color;
// }


// String Methods
// var str1 = "Hello, World";

// var a = str1.substring(0, 3);
// var b = str1.slice(0,3);
// var c = str1.substring(1,3);

// console.log(a);
// console.log(b);
// console.log(c);

// Array Methods

// var arr1 = [10,20,40,50,30];

// var a = arr1.pop();
// var b = arr1.shift();
// arr1.push(60);
// arr1.unshift(70);
// var c = arr1.slice(0,3);

// arr1.splice(1,0,60);
// arr1.splice(2,2,70);

// console.log(arr1);

// Interview Question 

var a = [10,20,30];

var b = a;

b.push(40);

console.log(a);
console.log(b);

b.pop();

console.log(a);
console.log(b);