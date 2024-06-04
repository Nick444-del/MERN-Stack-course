// DOM Query Selector

function fun1(){
    // var a = document.querySelector("h1");
    // console.log(a);
    // var b = document.querySelectorAll(".abc");
    // console.log(b);
    // b[2].style.background = "aqua";
    // var c = document.querySelector('.abc > span');
    // console.log(c);
    // c.style.background = 'aqua';
    // var a = document.querySelector(':nth-child(4) > span');
    // console.log(a);
    // a.style.background = 'cyan';
    // a.style.color = 'red';
    // var b = document.querySelector(':only-child');
    // console.log(b);
    // b.style.background = 'limegreen';
}

function fun2(){
    var a = document.querySelector('ul');
    var ele = document.createElement('li');
    
    var m = prompt("Enter your name:");
    // var val = document.createTextNode('Item 5');
    var val = document.createTextNode(m);

    ele.appendChild(val);

    a.appendChild(ele);
}

// function fun3(){
//     var a = document.querySelector('.image');
//     var b = document.createElement('img');
//     // b.setAttribute('src', './pic1.jpg');
//     b.src = './pic1.jpg';
//     // image styling start
//     b.style.height = "100%";
//     b.style.width = "100%";
//     b.style.borderRadius = "20px";
//     a.style.border = 'none';
//     // image styling end
//     a.appendChild(b);
// }

function fun4(){
    // var ul = document.querySelector('ul');
    // ul.removeChild(ul.childNodes[1]);
    var abc = document.querySelector('.abc');
    // console.log(abc.parentNode);
    abc.parentNode.remove();
}

console.log(parseInt('12'));
console.log(parseInt('12.90'));
console.log(parseInt('12d'));
console.log(parseInt('12 90'));
console.log(parseInt('12,90'));
console.log(parseInt('13,90'));
console.log(parseInt('s13'));

console.log(parseFloat('13'));
console.log(parseFloat('13.78'));
console.log(parseFloat('13.78g'));
console.log(parseFloat('13.78 ksl'));
console.log(parseFloat('13.78.90'));
console.log(parseFloat('13,78.90'));

console.log(Number('14'));
console.log(Number('14df'));
console.log(Number('14 89'));
console.log(Number('14.78'));
console.log(Number('14,78'));