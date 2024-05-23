function html_move() {
    // html bar
    var html_bar = document.getElementById("html_bar");
    var html_p = document.getElementById("html_p");
    var b = setInterval(fun1, 10);
    function fun1() {
        if (b == 100) {
            clearInterval(b);
        } else {
            b++;
            html_p.innerHTML = b + '%';
            html_bar.style.width = b + '%';
        }
    }
}

function php_move() {
    // php bar
    var php_bar = document.getElementById("php_bar");
    var php_p = document.getElementById("php_p");
    var b = setInterval(fun2, 10);

    function fun2() {
        if (b == 80) {
            clearInterval(b);
        } else {
            b++;
            php_p.innerHTML = b + '%';
            php_bar.style.width = b + '%';
        }
    }
}

function css_move() {
    // css bar
    var css_bar = document.getElementById("css_bar");
    var css_p = document.getElementById("css_p");
    var b = setInterval(fun3, 10);
    function fun3() {
        if (b == 90) {
            clearInterval(b);
        } else {
            b++;
            css_p.innerHTML = b + '%';
            css_bar.style.width = b + '%';
        }
    }
}

function wordpress_move() {
    // css bar
    var wordpress_bar = document.getElementById("wordpress_bar");
    var wordpress_p = document.getElementById("wordpress_p");
    var b = setInterval(fun4, 10);
    function fun4() {
        if (b == 90) {
            clearInterval(b);
        } else {
            b++;
            wordpress_p.innerHTML = b + '%';
            wordpress_bar.style.width = b + '%';
        }
    }
}

function javascript_move() {
    // JavaScript bar
    var javascript_bar = document.getElementById("javascript_bar");
    var javascript_p = document.getElementById("javascript_p");
    var b = setInterval(fun5, 10);
    function fun5() {
        if (b == 75) {
            clearInterval(b);
        } else {
            b++;
            javascript_p.innerHTML = b + '%';
            javascript_bar.style.width = b + '%';
        }
    }
}

function photoshop_move() {
    // Photoshop bar
    var photoshop_bar = document.getElementById("photoshop_bar");
    var photoshop_p = document.getElementById("photoshop_p");
    var b = setInterval(fun6, 10);
    function fun6() {
        if (b == 55) {
            clearInterval(b);
        } else {
            b++;
            photoshop_p.innerHTML = b + '%';
            photoshop_bar.style.width = b + '%';
        }
    }
}

function happy_number() {
    var happy_num = document.getElementById("happy_num");
    var b = setInterval(fun7, 10);
    function fun7() {
        if (b == 232) {
            clearInterval(b);
        } else {
            b++;
            happy_num.innerHTML = b;
        }
    }
}

function project_num() {
    var project_num = document.getElementById("project_num");
    var b = setInterval(fun8, 10);
    function fun8() {
        if (b == 521) {
            clearInterval(b);
        } else {
            b++;
            project_num.innerHTML = b;
        }
    }
}

function support_num() {
    var support_num = document.getElementById("support_num");
    var b = setInterval(fun9, 1);
    function fun9() {
        if (b == 1463) {
            clearInterval(b);
        } else {
            b++;
            support_num.innerHTML = b;
        }
    }
}

function team_num() {
    var team_num = document.getElementById("team_num");
    var b = setInterval(fun10, 100);
    function fun10() {
        if (b == 15) {
            clearInterval(b);
        } else {
            b++;
            team_num.innerHTML = b;
        }
    }
}

html_move();
php_move();
css_move();
wordpress_move();
javascript_move();
photoshop_move();
happy_number();
project_num();
support_num();
team_num();

// Navas and Tabs

var pcard = document.getElementsByClassName("pcard");
var list1 = document.getElementsByTagName("li");
var col = document.getElementsByClassName("col");

function filer_all(m) {
    for (var i = 0; i < pcard.length; i++) {
        pcard[i].style.display = "grid";
    }

    for (var i = 0; i < list1.length; i++) {
        list1[i].style.backgroundColor = "white";
        list1[i].style.color = "#444444";
    }

    m.style.backgroundColor = "#106EEA";
    m.style.color = "white";
}

function filer_app(m) {
    for (var i = 0; i < pcard.length; i++) {
        pcard[i].style.display = "none";
    }

    var app = document.getElementsByClassName("app");
    for (var i = 0; i < app.length; i++) {
        app[i].style.display = "grid";
    }

    for (var i = 0; i < list1.length; i++) {
        list1[i].style.backgroundColor = "white";
        list1[i].style.color = "black";
    }

    m.style.backgroundColor = "#106EEA";
    m.style.color = "white";
}


// FAQ Section
var ans = document.getElementsByClassName("ans");
function show_ans(s, j){
    var ico = document.getElementById(j);
    var icon = document.getElementsByTagName("i");
    var ans1 = document.getElementById(s);
    if(ans1.style.transform == "translateY(0px)" && ans1.style.opacity == "1" && ico.style.transform == "rotate(180deg)"){
        ans1.style.transform = "translateY(-50px)";
        ans1.style.opacity = "0";
        ico.style.transform = "rotate(0deg)";
    }else{
        for(var i=0; i<ans.length; i++){
            ans[i].style.opacity = "0";
            ans[i].style.transform = "translateY(-50px)";
        }
        for(var i=0; i<icon.length; i++){
            icon[i].style.transform = "rotate(0deg)";
        }
        ans1.style.transform = "translateY(0px)";
        ico.style.transform = "rotate(180deg)";
        ans1.style.opacity = "1";
    }
}