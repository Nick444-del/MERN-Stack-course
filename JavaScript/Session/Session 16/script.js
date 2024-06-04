// timing functions
// setTimeout, clearTimeout, setInterval, clearInterval

// var a;
// function set_time(){
//     a = setTimeout(fun2, 3000);
// }

// function clear_time(){
//     clearTimeout(a);
// }

// function fun2(){
//     alert("Hello ABC");
// }

// var b;
// function set_inter(){
//     b = setInterval(fun3, 3000);
// }

// function clear_inter(){
//     // clearTimeout(b);
//     clearInterval(b);
// }

// function fun3(){
//     alert("Hello ABC");
// }

// function move(){
//     var myBar = document.getElementById("myBar");
//     var b = setInterval(fun5, 100);
//     var width1 = 0;
//     var percentage1 = document.getElementById("percentage1");
//     function fun5(){
//         if(b == 80){
//             clearInterval(b);
//         }else{
//             b++;
//             myBar.style.width = b+"%";
//             myBar.innerHTML = b+"%";
//             // percentage1.innerHTML = b+"%";
//         }
//     }
// }


// var u = +prompt("Enter a number");
// function incre(m){
//     var a = document.getElementById("demo1");
//     var b = setInterval(fun5, 10);
//     var p = 0;
//     function fun5(){
//         if(p == m){
//             clearInterval(b);
//         }else{
//             p++;
//             a.innerHTML = p;
//         }
//     }
// }

function dualfun(x,y){
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var m = setInterval(fun1, 10);
    var n = setInterval(fun2, 100);
    var p = 0;
    var q = 0;
    function fun1(){
        if(p == x){
            clearInterval(m);
        }else{
            p++;
            a.innerHTML = p;
        }
    }
    function fun2(){
        if(q == y){
            clearInterval(n);
        }else{
            q++;
            b.innerHTML = q;
        }
    }
}
dualfun(125, 15);