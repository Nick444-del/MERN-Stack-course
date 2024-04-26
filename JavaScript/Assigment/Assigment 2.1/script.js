var a = document.getElementById("num1");
var b = document.getElementById("num2");
var view = document.getElementById("view");

function add(){
    view.innerText = Number(a.value) + Number(b.value);
}

function sub(){
    view.innerText = Number(a.value) - Number(b.value);
}

function mul(){
    view.innerText = Number(a.value) * Number(b.value);
}

function div(){
    view.innerText = Number(a.value) / Number(b.value);
}

function clear1(){
    view.innerText = "";
    a.value = "";
    b.value = "";
}