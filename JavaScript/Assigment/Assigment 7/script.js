var modal1 = document.getElementById('modal1');

function open_modal(i, m_t){
    modal1.style.display = "block";
    var title = document.getElementById('m-title');
    title.innerHTML = m_t;
}

function close2(){
    modal1.style.display = "none";
}

function close1(){
    modal1.style.display = "none";
}

