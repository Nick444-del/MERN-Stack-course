var name1 = document.getElementById("name1");
var date = document.getElementById("date1");
var phone = document.getElementById("phno");

var dname = document.getElementById("d-name");
var ddate = document.getElementById("d-date");
var dphone = document.getElementById("d-phnumber");


function fun1(){
    dname.innerHTML = name1.value;
    ddate.innerHTML = date.value;
    dphone.innerHTML = phone.value;
}

function vcard(){
    var form = document.getElementById("form");
    form.style.display = "none";
}