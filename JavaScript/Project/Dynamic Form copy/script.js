function add() {
    let select = document.querySelector('#select_1');
    let selectValue = select.value;
    if (selectValue == '') {
        alert('Please Select the Type');
    } else {
        addFieldCode(selectValue);
    }
    selectValue.value = '';
}

function addFieldCode(y) {
    let box2 = document.querySelector('#box2');
    let code;

    if (y == 'submit') {
        code = `<div class="field_2 2SubmitBth">
                    <button class="btn" id="btn_2" onclick="submitFields(this)">submit</button>
                </div>`
    } else if (y == 'text' || y == 'email' || y == 'number') {
        code = `<div class="field_1">
                        <div class="nameing">
                            <input type="text" name="name" class="nameMe" onchange="nameIt(this)">
                        </div>
                        <div class='answer'>
                            <input type="${y}" placeholder="${y}" class='Value' onchange="valueIt(this)">
                        </div>
                        <span class='removeIcon' onclick="remove1(this)"><i class="fa fa-times"></i></span>
                </div>`
    } else if (y == "radio") {
        code = `<div class="field_1">
        <div class="rNameing">
            <input type="text" name="name" id="nameMe" onchange="nameIt2(this)">
        </div>
        <div class="checkbox1">
            <div class='create_options'>
                <input type="text" placeholder="Option" class="option_1 option1">
                <button onclick="addRadio(this,'${y}')" class="btn btn_4 rcButton">ADD</button>
            </div>
            <div id='radioResult'></div>
        </div>
        <span class='removeIcon' onclick="remove1(this)"><i class="fa fa-times"></i></span>
    </div>`
    } else if (y == 'select') {
        code = `<div class="field_1">
                    <div class="sNameing">
                        <input type="text" name="name" id="nameMe" onchange="nameIt3(this)">
                        </div class='select1'>
                    <button onclick="addselect(this)" class="btn btn_4 rcButton">ADD</button>
                    <input type="text" placeholder="Option" class="option1 setectOpt">
                    <select class="select1" name="type"> </select>
                    <div class="checkbox1"> </div>
                    <span class='removeIcon' onclick="remove1(this)"><i class="fa fa-times"></i></span>
                    </div>
                    </div>
                </div>`
    } else if (y == 'checkbox') {
        code = `<div class="field_1">
        <div class="rNameing">
            <input type="text" name="name" id="nameMe" onchange="nameIt4(this)">
        </div>
        <div class="checkbox2">
            <div class='create_options'>
                <input type="text" placeholder="Option" class="option_1 option2">
                <button onclick="addCheckbox(this,'${y}')" class="btn btn_4 rcButton">ADD</button>
            </div>
        </div>
        <span class='removeIcon' onclick="remove1(this)"><i class="fa fa-times"></i></span>
    </div>`
    }
    return box2.innerHTML += code;
}

function addCheckbox(y, ty) {
    let option2 = document.querySelector('.option2').value;
    let b = document.querySelector(".checkbox2");
    let code = `<div class= 'checkbox11'>
                    <label for='male'>${option2}</label>
                    <input type=${ty} onchange='valueIt3(this)' id='male' name=${y}><br>
                </div>`
    b.innerHTML += code;
}

function addRadio(x, y) {
    let option1 = document.querySelector('.option1').value;
    let b = document.querySelector(".checkbox1");
    let code = `<div class= 'checkbox11'>
                    <label for='male'>${option1}</label>
                    <input type=${y} id='male' class='male'  onchange="valueIt2(this)" name=${x}><br>
                </div>`
    b.innerHTML += code;
}

function valueIt(x) {
    x.parentNode.innerHTML = x.value
}

function valueIt2(x){
    let male = document.querySelectorAll('.male');
    for(let i = 0; i < male.length; i++){
        if(male[i].checked){
            document.querySelector('#radioResult').innerHTML = male[i].value;
            break;
        }
    }
}

function nameIt(x) {
    x.parentNode.innerHTML = x.value + " :-"
}

function nameIt2(x) {
    x.parentNode.innerHTML = x.value + " :-"
}

function nameIt3(x) {
    x.parentNode.innerHTML = x.value + " :-"
}

function nameIt4(x) {
    x.parentNode.innerHTML = x.value + " :-"
}

function addselect(x) {
    let parent = x.parentElement;
    let opt = parent.querySelector('.option1');
    let a = opt.value.trim();
    let sel = parent.querySelector('.select1');
    opt.value = '';
    if (a == '') {
        alert('Please Enter the Option');
    } else {
        let optVal = document.createElement('option');
        optVal.value = a;
        optVal.text = a;
        sel.appendChild(optVal);
        console.log(a.val = '');
    }
}

function remove1(x) {
    let box2 = document.querySelector('#box2');
    box2.removeChild(x.parentElement);
}

function submitFields(x) {
    let box2 = document.querySelectorAll('.box2');
    alert("Fields Added Submitted");
    let part3 = document.querySelector('#part3');
    // console.log(part3);

    // appending the elements in the part 3
    let box3 = document.createElement('div');
    box3.className = 'box3';
    part3.appendChild(box3);
    box2.forEach((e) => {
        box3.appendChild(e);
    });

    // Filtering the elemnts
    let span = document.querySelectorAll('.removeIcon');
    for (let i = 0; i < span.length; i++) {
        span[i].style.display = 'none';
    }
    let option1 = document.querySelectorAll('.option1');
    for(let i = 0; i < option1.length; i++){
        option1[i].style.display = 'none';
    }
    let setectOpt = document.querySelectorAll('.setectOpt');
    for(let i = 0; i < setectOpt.length; i++){
        setectOpt[i].style.display = 'none';
    }
    let rcButton = document.querySelectorAll('.rcButton');
    for(let i = 0; i < rcButton.length; i++){
        rcButton[i].style.display = 'none';
    }
    let field_2 = document.querySelectorAll('.field_2');
    for(let i = 0; i < field_2.length; i++){
        field_2[i].style.display = 'none';
    }

    // Adding submit button
    let btn = document.createElement('button');
    btn.className = 'btn btn_3';
    btn.innerHTML = 'SUBMIT';
    part3.appendChild(btn);
    btn.setAttribute('onclick', 'finalSubmit()');
}

function finalSubmit(){
    // Getting the values of forth part and appending box 4 in part 4
    let part4 = document.querySelector('#part4');
    let box4 = document.createElement('div');
    box4.className = 'box4';
    part4.appendChild(box4);

    // Getting the values of part 3 and converting them into labels
    let box3 = document.querySelector('.box3');
    box4.innerHTML = box3.innerHTML;
    box3.innerHTML = '';
}