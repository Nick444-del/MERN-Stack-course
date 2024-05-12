var modal1 = document.getElementById('modal1');

function open_modal( m_t, c){
    // modal1.style.display = "block";
    modal1.style.opacity = "1";
    modal1.style.transform = "scale(1)";
    var title = document.getElementById('m-title');
    title.innerHTML = m_t;
    var image = document.getElementById('m-change');
    image.src = './img/pic'+c+'.png';
}

function close2(){
    // modal1.style.display = "none";
    modal1.style.opacity = 0;
    modal1.style.transform = "scale(0)";
}

function close1(){
    // modal1.style.display = "none";
    modal1.style.opacity = 0;
    modal1.style.transform = "scale(0)";
}

