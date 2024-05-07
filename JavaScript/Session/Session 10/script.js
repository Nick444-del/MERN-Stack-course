// var b1 = document.getElementById("b1");
// var b2 = document.getElementById("b2");
// var b3 = document.getElementById("b3");
// var b4 = document.getElementById("b4");
// var b5 = document.getElementById("b5");

// function btn1(){
//     // b1.style.color = "green";
//     var a = document.getElementsByTagName("button")[0];
//     a.style.color = "green";
// }

// function btn2(){
//     b2.style.color = "cyan";
// }

// function btn3(){
//     b3.style.color = "blue";
// }

// function btn4(){
//     b4.style.color = "lightgreen";
// }

// function btn5(){
//     b5.style.color = "purple";
// }

function btn(m){
    var k = document.getElementsByTagName("button");

    for(var i=0; i<k.length; i++){
        k[i].style.backgroundColor = "lightgray";
        k[i].style.color = "black"
    }

    m.style.backgroundColor = "Cyan";
    m.style.color = "white";
}

function mouse_over(a,b){
    a.src = "img/pic"+b+".jpg";
}

function mouse_out(a,b){
    a.src = "img/pic"+b+".jpg";
}

var modal = document.getElementById("modal");

function open_modal(m){
    // modal.style.display = "block";
    modal.style.transform = "scale(1)";
    var text = document.getElementById("text");
    
    text.value = m.innerHTML;
}

function close1(){
    // modal.style.display = "none";
    modal.style.transform = "scale(0)";
}