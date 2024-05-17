// Question 1

var str1 = "Hello";
var str2 = "World";
var str3 = "How are you"

var concatStr = str1 + " " + str2 + " " + str3;
console.log(concatStr);
document.write(concatStr+"<br>");

// Question 2

var para1 = document.getElementById("para1");
// alert(para1.innerHTML);

// Question 3
var ip1 = document.getElementById("ip1");
function btn1() {
    console.log(ip1.value);
    document.write("Enter value is " + ip1.value + "<br>");
    ip1.value = "Smith";
    document.write("Change value is " + ip1.value);
}

// Question 4
var q4 = document.getElementsByClassName("q4");


// Question 5

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function btn2() {
    
    if (Number(num1.value) == Number(num2.value)) {
        console.log(num1.value + num2.value)
        document.write("Addintion is " + (Number(num1.value) + Number(num2.value)));
    } else {
        document.write("The number cannot be added");
    }
}

// Question 6
var header1 = document.getElementsByClassName("header1")[0];
var header2 = document.getElementsByTagName("h2")[0];

document.write(header1+"<br>");
document.write(header2+"<br>");

// Question 7

for(var i = 0; i <= 20; i++){
    if(i%2 == 0){
        document.write(i+ "<br>");
    }
}

// Question 8

var ip2 = document.getElementById("ip2");
function printLoop() {
    console.log(ip2.value);
    var i = 0;
    while(i<=ip2.value.length){
        console.log(ip2.value[i]);
        i++;
    }
}

// Question 9

var a = { data: [{ name: "abc", email: "abc@gmail.com" }, { name: "pqr", email: "pqr@gmail.com" }] }; 

for(var i in a){
    console.log(a[i]);
}

// Question 10

var b = {
    name: "abc",
    email: {
        email1: "abc@gmail.com",
        email2: "abc2@gmail.com"
    },
    contact : {
        phone1: 12356789,
        phone2: 12356789
    }
}
for (var i in b){
    console.log(b[i]);
}

// Question 11

var arr1 = ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"];
document.write(arr1[2][0]+","+ arr1[2][1][2][1]+","+ arr1[2][1][2][0]+","+ arr1[4]+"<br>");

// Question 12
var arr2 = ["hey, How are you?","Hello","Javascript","Hello, How are you. How can I contact you?"];
var a0 = arr2[0].length;
var j = 0;
while(j < arr2.length){
    if(arr2[j].length > a0){
        console.log(arr2[j]);
        console.log(arr2[j].length);
        break;
    }
    j++;
}