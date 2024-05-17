function fun1(){
    document.getElementById("demo").innerHTML = Math.trunc(Math.random()*10)+1;
}

function fun2(){
    document.getElementById("demo").innerHTML = Math.trunc(Math.random()*10)+1;
}

function fun3(){
    document.getElementById("demo").innerHTML = Math.trunc(Math.random()*10)+1;
}

function fun4(){
    document.getElementById("demo").innerHTML = Math.trunc(Math.random()*10)+1;
}

function fun5(){
    document.getElementById("demo").innerHTML = Math.trunc(Math.random()*10)+1;
}

function fun6(){
    document.getElementById("demo").innerHTML = Math.trunc(Math.random()*10)+1;
}

function fun7(){
    document.getElementById("demo2").innerHTML = document.getElementById("demo1").value;
}

function fun8(){
    document.getElementById("demo3").style.backgroundColor = "blue";
}

function fun9(){
    document.getElementById("demo9").style.backgroundColor = "Yellow";
}

function fun10(){
    document.getElementById("demo10").style.backgroundColor = "red";
}

function fun11(){
    document.getElementById("demo11").style.backgroundColor = "green";
}

function fun12(){
    document.getElementById("demo12").style.backgroundColor = "purple";
}

function fun13(){
    document.getElementById("demo13").style.backgroundColor = "pink";
}

function fun14(){
    var inp = document.getElementById("input1").value.trim();
    var word = document.getElementById("words");
    var char = document.getElementById("characters");
    var a2 = 0;
    var w1 = 1;

    for(var i=0; i<inp.length; i++){
        if(inp[i] == " " && inp[i] != "  "){
            w1 += 1;
        }else{
            a2 += 1;
        }
    }

    word.innerHTML = "character: "+ a2;
    char.innerHTML = "word: "+ w1;
}