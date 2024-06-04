var message = document.querySelector('p');
var input = document.querySelector('#input');

function fun1(){
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    var h5 = document.createElement('h5');
    h5.textContent = input.value;
    var i = document.createElement('i');
    i.setAttribute('class', 'fa fa-times');
    box.appendChild(h5);
    box.appendChild(i);
    var view = document.querySelector('.view');
    view.appendChild(box);
    message.style.display = 'none';
    input.value = '';
    i.addEventListener('click', function(){
        box.remove();
        box = document.querySelectorAll('.box');
        if(box.length == 0){
            message.style.display = 'block';
        }
    });
}