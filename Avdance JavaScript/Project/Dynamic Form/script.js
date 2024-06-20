function formName(){
    let formName = document.getElementById("form_name").value;
    document.getElementById("formName").innerHTML = formName;
}

function inputField(){
    let formq = document.querySelector('#formq');
    let inpText = document.createElement('div');
    inpText.className = 'input-text';
    formq.appendChild(inpText);
    let textName = prompt('Enter the name of the input field');
    let inpleb = document.createElement('label');
    inpleb.innerHTML = textName;
    inpText.appendChild(inpleb);
    let text = document.createElement('input');
    text.type = 'text';
    text.name = textName;
    text.className = 'text';
    inpText.appendChild(text);
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.className = 'close';
    inpText.appendChild(closeBtn);
    closeBtn.onclick = function(){
        formq.removeChild(text);
        formq.removeChild(inpleb);
        formq.removeChild(closeBtn);
    }
}

function numberField(){
    let formq = document.querySelector('#formq');
    let numText = document.createElement('div');
    numText.className = 'input-text';
    formq.appendChild(numText);
    let textName = prompt('Enter the name of the input field');
    let inpleb = document.createElement('label');
    inpleb.innerHTML = textName;
    numText.appendChild(inpleb);
    let text = document.createElement('input');
    text.type = 'number';
    text.name = textName;
    text.className = 'text';
    numText.appendChild(text);
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.className = 'close';
    numText.appendChild(closeBtn);
    closeBtn.onclick = function(){
        formq.removeChild(text);
        formq.removeChild(inpleb);
        formq.removeChild(closeBtn);
    }
}

function emailField(){
    let formq = document.querySelector('#formq');
    let emailText = document.createElement('div');
    emailText.className = 'input-text';
    formq.appendChild(emailText);
    let textName = prompt('Enter the name of the input field');
    let inpleb = document.createElement('label');
    inpleb.innerHTML = textName;
    emailText.appendChild(inpleb);
    let text = document.createElement('input');
    text.type = 'email';
    text.name = textName;
    text.className = 'text';
    emailText.appendChild(text);
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.className = 'close';
    emailText.appendChild(closeBtn);
    closeBtn.onclick = function(){
        formq.removeChild(text);
        formq.removeChild(inpleb);
        formq.removeChild(closeBtn);
    }
}

function radioField(){
    // let formq = document.querySelector('#formq');
    // let labelInp = prompt('Please enter the name of the input field');
    
    // let inpRadio = document.createElement('div');
    // inpRadio.className = 'inpRadio';
    // formq.appendChild(inpRadio);

    // let inpleb = document.createElement('label');
    // inpleb.innerHTML = labelInp;
    // inpRadio.appendChild(inpleb);

    // let radioField = document.createElement('input');
    // radioField.type = 'radio';
    // radioField.setAttribute('id', inpleb);
    // radioField.name = labelInp;
    // radioField.className = 'radio';
    // radioField.value = inpleb;
    // inpRadio.appendChild(radioField);

    // let option1 = document.createElement('input');
    // option1.type = 'text';
    // option1.setAttribute('id', inpleb);
    // option1.className = 'text';
    // option1.setAttribute('for', inpleb);
    // option1.addEventListener('onchange', function(){
    //     let option2 = document.createElement('label');
    //     option2.innerHTML = option1.value;
    //     inpRadio.appendChild(option2);
    // });

    // let rlab = document.createElement('label');
    // rlab.setAttribute('id', inpleb);
    // rlab.appendChild(option1);

    // inpRadio.appendChild(rlab);

    code = `<div class="field_1">
                    <label for="">${a}:-</label>
                    <button onclick="addCheckbox(this,'${a}','${b}')" class="btn btn_4">ADD</button>
                    <div class="checkbox1">
                        <input type="text" placeholder="Option" class="option_1" >
                    </div>
                    <span onclick="remove1(this)"><i class="fa fa-times"></i></span>
                </div> `
}

function add1(){
    let formFields = document.querySelector("#formFields");
    if(formFields.value == 'text'){
        inputField();
    }else if(formFields.value == 'number'){
        numberField();
    }else if(formFields.value == 'email'){
        emailField();
    }else if(formFields.value == 'radio' || formFields.value == 'checkbox'){
        radioField();
    }
}

function next1(){
    let secondStep = document.querySelector("#secondStep");
    let closeBtn = document.querySelector('.close');
    closeBtn.style.display = 'none';
}