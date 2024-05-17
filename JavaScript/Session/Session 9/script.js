// 3. do while loop

// var i = +prompt("Enter a number");
// var j = 1;

// do{
//     document.write(i + " x " + j + " = " + i * j + "<br>");
//     j++;
// }while (j <= 10);

// console.log(12.34);
// console.log(Math.trunc(12.34));

// Armstrong Number
// var num1 = +prompt("Enter a number");
// var chec = num1
// var leng = String(num1).length;
// var sum = 0;

// while(num1 > 0){
//     var b = num1%10;
//     sum += (b**leng);

//     num1 = Math.trunc(num1/10);
// }
// console.log(sum);

// if(sum == chec){
//     console.log("Armstrong Number");
// }else{
//     console.log("Not an Armstrong Number");
// }

// Star pattern

// for(var i=1; i<= 5; i++){
//     for(var j=1; j<= 5; j++){
//         document.write("*&nbsp");
//     }
//     document.write("<br>");
// }

// for(var i=1; i<= 5; i++){
//     for(var j=1; j <= i; j++){
//         document.write("*&nbsp");
//     }
//     document.write("<br>");
// }

// for(var k=10; k >= 1; k--){
//     console.log(k);
//     document.write(k + "<br>");
// }

// for(var i=5; i >= 1; i--){
//     for(var j=1; j<= i; j++){
//         document.write("*&nbsp");
//     }
//     document.write("<br>");
// }

// for(var a=1; a <= 5; a++){
//     for(var b = 5; b >= a; b--){
//         document.write("*&nbsp");
//     }
//     document.write("<br>");
// }

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         if(j%2 != 0){
//             document.write(1);
//         }else{
//             document.write(2);
//         }
//     }
//     document.write("<br>");
// }

// var num2 = 1
// for (var i = 1; i <= 4; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(num2+"&nbsp");
//         num2++;
//     }
//     document.write("&nbsp<br>");
// }

for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        document.write(" &nbsp");
    }
    for (var k = 1; k <= i; k++) {
        document.write("*&nbsp");
    }
    document.write("<br>");
}
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(" &nbsp");
    }
    for(var k = 5; k >= i; k--){
        document.write("*&nbsp ");
    }
    document.write("<br>");
}

for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        document.write("*&nbsp");
    }
    document.write("<br>");
}
