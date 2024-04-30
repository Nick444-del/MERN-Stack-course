// Exercise 1
var sideA = document.getElementById("sideA");
var sideB = document.getElementById("sideB");
var sideC = document.getElementById("sideC");
var ctriangle = document.getElementById("ctriangle");
function checkT(){
    if(sideA.value == sideB.value && sideB.value == sideC.value && sideA.value == sideC.value){
        ctriangle.innerHTML = "Equilateral Triangle";
    }else if(sideA.value != sideB.value && sideB.value != sideC.value && sideA.value != sideC.value){
        ctriangle.innerHTML = "Scalene Triangle";
    }else if(sideA.value == sideB.value || sideB.value == sideC.value || sideA.value == sideC.value){
        ctriangle.innerHTML = "Isosceles Triangle";
    }else{
        ctriangle.innerHTML = "Not a Triangle";
    }
}

// Exercise 2
var sname = document.getElementById("sname");
var smarks = document.getElementById("smarks");
var marks = document.getElementById("marks");

function fun1(){
    if(smarks.value > 90 && smarks.value <= 100){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in S grade";
    }else if(smarks.value > 80 && smarks.value <= 90){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in A grade";
    }else if(smarks.value > 70 && smarks.value <= 80){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in B grade";
    }else if(smarks.value > 60 && smarks.value <=70){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in C grade";
    }else if(smarks.value > 50 && smarks.value <= 60){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in D grade";
    }else if(smarks.value > 40 && smarks.value <=50){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in E grade";
    }else if(smarks.value > 30 && smarks.value <= 40){
        marks.innerHTML = sname.value+" has got "+smarks.value+" and he is in F grade";
    }else{
        marks.innerHTML = "Entered Value is invalid";
    }
}

// Exercise 3
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var bmi = document.getElementById("bmi");
var bmiCal = weight.value/(height.value)**2;

function fun2(){
    if(bmiCal < 18.5){
        bmi.innerHTML = "Your BMI is "+bmiCal+" and you are underweight";
    }else if(bmiCal >= 18.5 && bmiCal < 24.9){
        bmi.innerHTML = "Your BMI is "+bmiCal+" and you are normal";
    }else if(bmiCal >= 24.9 && bmiCal < 29.9){
        bmi.innerHTML = "Your BMI is "+bmiCal+" and you are overweight";
    }else if(bmiCal > 30 ){
        bmi.innerHTML = "Your BMI is "+bmiCal+" and you are obese";
    }else{
        bmi.innerHTML = "Entered Value is invalid";
    }
}

// Exercise 4

var cm = document.getElementById("cm");
var meter = document.getElementById("meter");

function convert(){
    if(cm.value > 0){
        meter.innerHTML = cm.value/2.54+" in inches";
    }else{
        meter.innerHTML = "Entered Value is invalid";
    }
}

// Exercise 5

var temp = document.getElementById("temp");
var celcius = document.getElementById("celcius");

function fun3(){
    if(temp.value < -273.15){
        celcius.innerHTML = "The temperature is invalid because it is below absolute zero.";
    }else if(temp.value == -273.15){
        celcius.innerHTML = "The temperature is absolute zero.";
    }else if(temp.value > -273.15 && temp.value < 0){
        celcius.innerHTML = "The temperature is below freezing";
    }else if(temp.value == 0){
        celcius.innerHTML = "The temperature is at the freezing point.";
    }else if(temp.value > 0 && temp.value < 100){
        celcius.innerHTML = "The temperature is in the normal range."
    }else if(temp.value == 100){
        celcius.innerHTML = "The temperature is at the boiling point.";
    }else if(temp.value > 100){
        celcius.innerHTML = "The temperature is above boiling point.";
    }
}

// Exercise 6

var lastNum = document.getElementById("lastNum");
var divisibleByThree = document.getElementById("divisibleByThree");

function find1(){
    divisibleByThree.innerHTML = (lastNum.value%10)/3;
}

// Exercise 7

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var get = document.getElementById("get");

function find(){
    if((num1.value < num2.value && num2.value < num3.value) || (num3.value < num2.value && num2.value < num1.value)){
        get.innerHTML = num2.value + " is the middle value"
    }else if((num2.value < num1.value && num1.value < num3.value) || (num3.value < num1.value && num1.value < num2.value)){
        get.innerHTML = num1.value + " is the middle value"
    }else{
        get.innerHTML = num3.value + " is the middle value"
    }
}

// Exercise 8
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var high = document.getElementById("high");

function higher(){
    if(num4.value>num5.value && num4.value>num6.value){
        higher.innerHTML = num4.value;
    }else if(num5.value>num4.value && num5.value>num6.value){
        higher.innerHTML = num5.value;
    }else{
        higher.innerHTML = num6.value;
    }
}