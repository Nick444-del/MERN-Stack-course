var images1 = document.getElementsByClassName("images");
var list1 = document.getElementsByTagName("li");
var modal = document.getElementById("modal");

function fun1(m){
    for(var i = 0; i<images1.length; i++){
        images1[i].style.display = "flex";
    }

    for(var i = 0; i<list1.length; i++){
        list1[i].style.backgroundColor = "white";
        list1[i].style.color = "black";
    }
    m.style.backgroundColor = "#01B1D7";
    m.style.color = "white";
}

function fun2(m){
    for(var i = 0; i<images1.length; i++){
        images1[i].style.display = "none";
        // images1[i].style.transform = "scale(0)";
    }

    var app = document.getElementsByClassName("app");
    for(var i = 0; i<app.length; i++){
        app[i].style.display = "flex";
        // images1[i].style.transform = "scale(1)";
    }

    for(var i = 0; i<list1.length; i++){
        list1[i].style.backgroundColor = "white";
        list1[i].style.color = "black";
    }
    m.style.backgroundColor = "#01B1D7";
    m.style.color = "white";
}

function fun3(m){
    for(var i=0; i<images1.length; i++){
        images1[i].style.display = "none";
    }

    var web = document.getElementsByClassName("web");
    for(var i=0; i<web.length; i++){
        web[i].style.display = "flex";
    }
    for(var i=0; i<list1.length; i++){
        list1[i].style.backgroundColor = "white";
        list1[i].style.color = "black";
    }
    m.style.backgroundColor = "#01B1D7";
    m.style.color = "white";
}

function fun4(m){
    for(var i=0; i<images1.length; i++){
        images1[i].style.display = "none";
    }
    var card = document.getElementsByClassName("card");
    for(var i=0; i<card.length; i++){
        card[i].style.display = "flex";
    }
    for(var i=0; i<list1.length; i++){
        list1[i].style.backgroundColor = "white";
        list1[i].style.color = "black";
    }
    m.style.backgroundColor = "#01B1D7";
    m.style.color = "white";
}

function open1(a, b){
    modal.style.display = "flex";
    var m_img = document.getElementById("m_img");
    var m_p = document.getElementById("m_p");
    console.log(m_p);
    m_p.innerHTML = a;
    m_img.src = "./img/pic"+b+".jpg";
}

function close1(){
    modal.style.display = "none";
    modal.style.cursor = "pointer";
}