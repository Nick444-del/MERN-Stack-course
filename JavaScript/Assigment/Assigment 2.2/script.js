var nameElement = document.getElementById("fname");
var emailElement = document.getElementById("femail");
var passElement = document.getElementById("fpass");
var messageElement = document.getElementById("fmessage");

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var sname = document.getElementById("demo1");
var semail = document.getElementById("demo2");
var spass = document.getElementById("demo3");
var smessage = document.getElementById("demo4");

function myFunction(){
    nameElement.style.display = "block";
}
function myFunction1(){
    emailElement.style.display = "block";
}

function myFunction2(){
    passElement.style.display = "block";
}

function myFunction3(){
    messageElement.style.display = "block";
}

function myFunction4(){
    console.log(nameElement.value);
    console.log(emailElement.value);
    console.log(passElement.value);
    console.log(messageElement.value);
    box1.style.display = "none";
    box2.style.display = "block";
    sname.innerHTML = nameElement.value;
    semail.innerHTML = emailElement.value;
    spass.innerHTML = passElement.value;
    smessage.innerHTML = messageElement.value;
}

function myFunction5(){
    var profileI = document.getElementById("profile1");
    profileI.style.display = "none";
}

function myFunction6(){
    var profileI = document.getElementById("profile1");
    profileI.style.display = "block";
}