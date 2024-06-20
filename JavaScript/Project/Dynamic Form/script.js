function add() {
    let select = document.querySelector('#select_1');
    let selectValue = select.value;
    let label = document.querySelector('#Label');
    let lb = label.value.trim();

    
    if (selectValue == '') {
        alert('Please Select the Type');
    } else {
        addFieldCode(lb, selectValue);
    }
    selectValue.value = '';
    lb.value = '';
}

function addFieldCode(x, y) {
    let box2 = document.querySelector('#box2');
    let code;

    if (y == 'submit') {
        code = `<div class="field_1">
                    <button class="btn" id="btn_2" onclick="submit()">submit</button>
                </div>`
    } else if (y == 'text' || y == 'email' || y == 'number') {
        code = `<div class="field_1">
                        <label for="">${x}:-</label>
                        <input type="${y}" placeholder="${y}">
                        <span onclick="remove1(this)"><i class="fa fa-times"></i></span>
                    </div>`
    } else if (y == "radio" || y == "checkbox") {
        code = `<div class="field_1">
                <label for="">${x}:-</label>
                <button onclick="addCheckbox(this,'${x}','${y}')" class="btn btn_4 rcButton">ADD</button>
                <div class="checkbox1">
                    <input type="text" placeholder="Option" class="option_1 option1" >
                </div>
                <span onclick="remove1(this)"><i class="fa fa-times"></i></span>
            </div> `
    } else if (y == 'select') {
        code = `<div class="field_1">
                    <label for="">${x}:-</label>
                    <button onclick="addselect(this)" class="btn btn_4 rcButton">ADD</button>
                    <input type="text" placeholder="Option" class="option1">
                    <select class="select1" name="type"> </select>
                    // <div class="checkbox1"> </div>
                    <span onclick="remove1(this)"><i class="fa fa-times"></i></span>
                </div>`
    }
    return box2.innerHTML += code;
}

function addCheckbox(y, z, ty) {
    let parent = y.parentElement
    let a = parent.querySelector(".option_1").value.trim();
    let b = parent.querySelector(".checkbox1");
    let code = `<div class="checkbox11">
                    <label for="male">${a}</label>
                    <input type=${ty}  id="male"name=${z}> <br>
                </div>`
    b.innerHTML += code;
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

function submit1() {
    let part1 = document.querySelector('#part1');
    let part2 = document.querySelector('#part2');
    part1.style.transform = 'scale(0)';
    setTimeout(() => {
        part1.style.display = 'none';
        part2.style.display = 'flex';
    }, 1000);
    setTimeout(() => {
        part2.style.opacity = '1';
    }, 1100);

    let icon = document.querySelectorAll('span');
    // icon.remove();
    for (let i = 0; i < icon.length; i++) {
        console.log(icon[i]);
        icon[i].remove();
    }
    // Remove Add Button
    let rcButton = document.querySelectorAll('button.btn_4');
    for(let i = 0; i < rcButton.length; i++){
        console.log(rcButton[i]);
        rcButton[i].remove();
    }
    // Remove input field
    let rcinput = document.querySelectorAll('input.option1');
    for(let i = 0; i < rcinput.length; i++){
        console.log(rcinput[i]);
        rcinput[i].remove();
    }

    let input = document.querySelector('input');
    input.style.width = '300px'

    let button = document.createElement('button');
    button.innerHTML = 'Submit Form';
    part2.appendChild(button);
    button.setAttribute('onclick', 'submit2()');
}

function submit2() {
    let part2 = document.querySelector('#part2');
    part2.style.transform = 'scale(0)';
    setTimeout(() => {
        part2.style.display = 'none';
    }, 1000);

    console.log(part2.innerHTML);
}