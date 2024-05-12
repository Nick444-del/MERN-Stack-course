// var str = 'Python'

// for(var i=0; i<str.length; i++){
//     if(str[i] == "s"){
//         console.log('Sorry');
//         break;
//         // continue;
//     }
//     console.log(str[i]);
// }

// var a = +prompt("Enter a number:");

// for(var i=0; i<=a; i++){
//     for(var j=0; j<=10; j++){
//         if(i%2 != 0){
//             continue;
//         }
//         document.write(i+"*"+j+"="+(i*j)+"<br>");
//     }
//     document.write("<br>");
// }

// var b = +prompt("Enter a number:")
// var i = 1;

// while(i<=b){

//     if(i%5 == 0){
//         document.write('Sorry'+'<br>');
//         break;
//     }

//     document.write(i+"<br>");
//     i++;
// }

// var c = +prompt("Enter a number:");
// var i = 0;

// while(i<c){
//     i++
//     if(i%5 == 0){
//         // i++;
//         continue;
//     }

//     document.write((i**2)+"<br>");
//     // i++;
// }

// String Methods

// var a = "hello";
// var b = a.toUpperCase();
// document.write(b+"<br>");

// var c = b.toLowerCase();
// document.write(c+"<br>");

// var str1 = "hello ";
// var str2 = "world";
// document.write(str1.concat(str2)+"<br>");

// var str4 = "AAAAAAhalloaaa";
// var str5 = str4.replace(/a/gi, "e");
// var str6 = "hello dev";
// var str7 = str6.replace(/hello/, 'hi'); 
// console.log(str1, str2, str4, str5, str6, str7);

// Math Methods
// console.log(Math.trunc(Math.random()*10)+1);
// var a = Math.trunc(Math.random()*254)+1;

// console.log(Math.round(12.7));
// console.log(Math.floor(12.7));
// console.log(Math.ceil(12.7));

// console.log(Math.max(345, 671, 351, 835));
// console.log(Math.min(345, 671, 351, 835));

// console.log(Math.sqrt(16));
// console.log(Math.cbrt(64));

function fun1(){
    var img = document.getElementById('img1');
    // var a = Math.trunc(Math.random()*4)+1;

    // img.src = "img/pic"+a+".jpg";

    var arr1 = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg"];
    var a = Math.trunc(Math.random()*4)
    img.src = arr1[a];
    console.log(arr1[a]);
}