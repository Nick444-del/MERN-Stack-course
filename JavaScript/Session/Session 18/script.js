function validate(){
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var err1 = document.querySelector('#err1');
    var err2 = document.querySelector('#err2');
    var err3 = document.querySelector('#err3');
    var err4 = document.querySelector('#err4');
    var flag = true;
    if(email.value.trim() == ""){
        err1.style.display = "block";
        flag = false;
    }else{
        err1.style.display = "none";
    }
    if(password.value.trim() == ""){
        err2.style.display = "block";
        err3.style.display = "none";
        err4.style.display = "none";
        flag = false;
    }else if(password.value.length < 6){
            err3.style.display = "block";
            err2.style.display = "none";
            err4.style.display = "none";
            flag = false;
        }else if(password.value.length > 12){
            err3.style.display = "none";
            err2.style.display = "none";
            err4.style.display = "block";
            flag = false;
        }else{
            err3.style.display = "none";
            err4.style.display = "none";
            err2.style.display = "none";
        }
    return flag;
}

function show(){
    var password = document.querySelector('#password');
    var btn = document.querySelector('#btn');
    if(password.type == "password"){
        password.type = "text";
        btn.value = "Hide";
    }else{
        password.type = "password";
        btn.value = "Show";
    }
    // if(password.getAttribute("type") == "password"){
    //     password.setAttribute("type", "text");
    //     btn.value = "Hide";
    // }else{
    //     password.setAttribute("type", "password");
    //     btn.value = "Show";
    // }
}