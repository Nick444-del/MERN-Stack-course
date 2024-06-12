// DOM => Document Object Model

// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// innerHtml
// innerText
// value

// function fun1(){
//     // var para = document.getElementById("para").innerHTML;
//     var para = document.getElementById("para");
//     console.log(para.innerText);
// }

// function swap() {
//     var head = document.getElementById("head"); // a
//     var para = document.getElementById("par"); // b

//     var temp = head.innerHTML; // c = a
//     head.innerHTML = para.innerHTML; // a = b
//     head.innerHTML = temp; // b = c
// }


function fun2(){
    var text = document.getElementById("demo3").value;
    var intro = document.getElementById("demo4");
    intro.innerText = "My name is "+ text;
    text.value = "";
}


// function fun3(){
//     var t = document.getElementById("deom5");
//     t.innerHTML = "<b></b>";
// }

function fun5(){
    var t = document.getElementById("demo6");
    // 1. Method
    // t.style.backgroundColor = "aqua";
    // t.style.fontFamily = "Helvetica";
    // t.style.fontSize = "45px";
    // t.style.color = "yellow";
    
    // 2. Method
    t.style = "background-color:aqua; font-family: Helvetica; font-size: 45px; color: yellow;"
}


function fun6(){
    var frame = document.getElementById("demo7");

    // 1. Method
    // frame.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img.jpg')";
    // frame.style.backgroundPosition = "center";
    // frame.style.backgroundSize = "cover";
    // frame.style.backgroundRepeat = "no-repeat";
    // frame.style.height = "300px";
    // frame.style.width = "300px";
    // frame.style.display = "flex";
    // frame.style.alignItems ="center";
    // frame.style.justifyContent = "center";

    // 2. Method
    frame.style = "background-image : url('./img.jpg'); background-position: center; background-size: cover; background-repeat: no-repeat; height: 300px; width: 300px;"

    // 3. Method
    // frame.innerHTML = "<img src='./img.jpg'>"
}