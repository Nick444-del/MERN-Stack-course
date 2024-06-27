// exception/error handling
// let a = 'ABC';
// try{
//     console.log(a);
// }catch{
//     console.log('error');
// }
// console.log('Hello');

// function fun1(){
    // let name = document.querySelector('#name').value;
    // let dName = document.querySelector('#dName');
    // document.querySelector('#name').style.backgroundColor = "white";
    // document.querySelector('#name').value = '';

    // try{
    //     if(name == "") throw "empty";
    //     if(isNaN(name)) throw "not a number";
        
    //     name = Number(name);
    //     if(name < 5) throw "too low";
    //     if(name >= 10) throw "too high";
    //     else{
    //         document.querySelector("#name").style.backgroundColor = "aqua";
            
    //     }
    // }catch(err){
    //     dName.innerHTML = "Output is "+ err;
    // }

    // let name = document.querySelector('#name').value;
    // let dName = document.querySelector('#dName');
    // document.querySelector('#name').style.backgroundColor = "white";
    // document.querySelector('#name').value = "";
    // let reg = /[0-9]/g;
    // let reg2 = /[!@#\$%\^\&*\)\(+=._-]/g

    // try{
    //     if(!isNaN(name)) throw ' a number';
    //     if(name == "") throw ' empty';
    //     if(name.match(reg)) throw ' number and string not allowed';
    //     if(name.match(reg2)) throw ' special character not allowed';
    //     else{
    //         document.querySelector('#name').style.backgroundColor = "aqua";
    //         dName.innerHTML = name.toUpperCase();
    //     }
    // }catch(err){
    //     dName.innerHTML = "Output is "+ err;
    // }
// }

let fun2 = () => {
    let x = new XMLHttpRequest(); // XHR
    
    x.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            let a = JSON.parse(this.responseText);
            let maindata = document.querySelector('#box');
            a.forEach((e) => {
                let div1 = document.createElement('div');
                div1.className = 'abc';
                maindata.appendChild(div1);

                for(let i in e){
                    if(i == 'id'){
                        let h1 = document.createElement('h1');
                        div1.appendChild(h1);
                        h1.innerHTML =  `<b>${i}</b> ${e[i]}`;
                    }else if(i == 'title' || i == 'price' || i == 'description'){
                        let p = document.createElement('p');
                        p.className = 'para';
                        div1.appendChild(p);
                        p.innerHTML = `<b>${i}</b> ${e[i]}`;
                    }else if(i == 'image'){
                        let img = document.createElement('img');
                        div1.appendChild(img);
                        img.src = e[i];
                    }
                }
            });
        }else{
            document.write("URL not working");
        }
    }
    x.open("GET", 'https://fakestoreapi.com/products', true);
    x.send();
};

fun2();