var player = document.getElementById("player");
var game = document.getElementById("game");
var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");
var ep1 = document.getElementById("ep1");
var ep2 = document.getElementById("ep2");
var pn1 = document.getElementById("p-name1");
var pn2 = document.getElementById("p-name2");
var es1 = document.getElementById("es1");
var es2 = document.getElementById("es2");
var result = document.getElementById("result");
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");


function play() {
    player.style.display = "none";
    game.style.display = "flex";
    ep1.innerHTML = p1.value;
    ep2.innerHTML = p2.value;
    pn1.innerHTML = p1.value;
    pn2.innerHTML = p2.value;
}

function roll() {
    var a = Math.trunc(Math.random()*6);
    var b = Math.trunc(Math.random()*6);
    dice1.src = "./img/Dice"+(a+1)+".png";
    dice2.src = "./img/Dice"+(b+1)+".png";
    es1.innerHTML = a+1;
    es2.innerHTML = b+1;
    if(es1.innerHTML == es2.innerHTML){
        result.innerText = "Tie";
    }else if(es1.innerHTML > es2.innerHTML){
        result.innerText = p1.value+" wins";
    }else if(es1.innerHTML < es2.innerHTML){
        result.innerText = p2.value+" wins";
    }
}