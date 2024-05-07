var modal1 = document.getElementById('modal1');

function open_modal(a, m_t, c){
    modal1.style.display = "block";
    var title = document.getElementById('m-title');
    title.innerHTML = m_t;
    var image = document.getElementById('m-change');
    image.src = './img/pic'+c+'.png';
}

function close2(){
    modal1.style.display = "none";
}

function close1(){
    modal1.style.display = "none";
}

