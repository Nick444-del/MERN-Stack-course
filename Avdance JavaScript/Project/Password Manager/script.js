console.log('Working...');
document.querySelector('.btn').addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('Clicked');
    console.log(username.value, password.value);
    let passwords = localStorage.getItem('passwords');
    if(passwords == null){
        let json = [];
        json.push({website: website.value, username: username.value, password: password.value});
        alert('Password Added Successfully');
        localStorage.setItem("passwords", JSON.stringify(json));
    }else{
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({website: website.value, username: username.value, password: password.value});
        alert('Password Added Successfully');
        localStorage.setItem("passwords", JSON.stringify(json));
    }
});

// video stop at 33.31