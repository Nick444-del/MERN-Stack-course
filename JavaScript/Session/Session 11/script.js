// Nav's and Tabs
// var demo1 = document.getElementById("demo1");
// demo1.style.display = "block";

// var button = document.getElementsByTagName("button")[0];
// button.style.backgroundColor = "cyan";

// function fun1(a, b){
//     // console.log(a);

//     var demo = document.getElementsByClassName('demo');
//     for(var i = 0; i < demo.length; i++){
//         demo[i].style.display = 'none';
//     }

//     var btn = document.getElementsByTagName('button');
//     for(var i=0; i<btn.length; i++){
//         btn[i].style.backgroundColor = 'lightgrey';
//     }

//     a.style.backgroundColor = 'cyan';
//     document.getElementById(b).style.display = 'block';
// }

// var lAll = document.getElementsByTagName("li")[0];
// // console.log(lAll);
// lAll.style.backgroundColor = "chocolate";

function all1(m){
    var images1 = document.getElementsByClassName("images");
    for(var i=0; i<images1.length; i++){
        images1[i].style.display = "block";
    }

    var list = document.getElementsByTagName("li");
    for(var i=0; i<list.length; i++){
        list[i].style.display = "chartreuse";
    }
    m.style.display = "chocolate";
}

function card1(m){
    var imgages1 = document.getElementsByClassName("images");
    for(var i=0; i<imgages1.length; i++){
        imgages1[i].style.display = "none";
    }

    var card1_img = document.getElementsByClassName("card");
    for(var i=0; i<card1_img.length; i++){
        card1_img[i].style.display = "block";
    }

    var list = document.getElementsByTagName("li");
    for(var i=0; i<list.length; i++){
        list[i].style.backgroundColor = "chartreuse";
    }
    m.style.backgroundColor = "chocolate";
}

function web1(m){
    var imgages1 = document.getElementsByClassName("images");
    for(var i=0; i<imgages1.length; i++){
        imgages1[i].style.display = "none";
    }

    var web1_img = document.getElementsByClassName("web");
    for(var i=0; i<web1_img.length; i++){
        web1_img[i].style.display = "block";
    }
    var list = document.getElementsByTagName("li");
    for(var i=0; i<list.length; i++){
        list[i].style.backgroundColor = "chartreuse";
    }
    m.style.backgroundColor = "chocolate";
}

function app1(m){
    var imgages1 = document.getElementsByClassName("images");
    for(var i=0; i<imgages1.length; i++){
        imgages1[i].style.display = "none";
    }

    var app1_img = document.getElementsByClassName("app");
    for(var i=0; i<app1_img.length; i++){
        app1_img[i].style.display = "block";
    }
    var list = document.getElementsByTagName("li");
    for(var i=0; i<list.length; i++){
        list[i].style.backgroundColor = "chartreuse";
    }
    m.style.backgroundColor = "chocolate";
}