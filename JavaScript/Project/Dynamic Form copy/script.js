function add() {
    let select = document.querySelector('#select_1');
    let selectValue = select.value;
    let label = document.querySelector('#Label');


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
        code = `<div class="field_2">
                    <button class="btn" id="btn_2" onclick="submitFields()">submit</button>
                </div>`
    } else if (y == 'text' || y == 'email' || y == 'number') {
        code = `<div class="field_1">
                        <div class="nameing">
                            <input type="text" name="name" id="nameMe" onchange="nameIt(this)">
                        </div>
                        <input type="${y}" placeholder="${y}">
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
                    <input type=${ty} id='male' name=${y}><br>
                </div>`
    b.innerHTML += code;
}

function addRadio(x, y) {
    let option1 = document.querySelector('.option1').value;
    let b = document.querySelector(".checkbox1");
    let code = `<div class= 'checkbox11'>
                    <label for='male'>${option1}</label>
                    <input type=${y} id='male' name=${x}><br>
                </div>`
    b.innerHTML += code;
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

function submitFields() {
    alert("Fields Added Submitted");

    let part2 = document.querySelector('#part2');
    let part3 = document.querySelector('#part3');

    console.log(part2.innerHTML);

    part3.innerHTML = part2.innerHTML;
    let icon = document.querySelectorAll('.removeIcon');
    console.log(part3);
    part3.removeChild(icon);
}