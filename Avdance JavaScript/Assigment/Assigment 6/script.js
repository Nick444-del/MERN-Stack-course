let main = document.querySelector('#main');
let table = document.createElement('table');
main.appendChild(table);
table.id = 'tab1';
let tr1 = document.createElement('tr');
table.appendChild(tr1);
let th = document.createElement('th');
tr1.appendChild(th);
let th1 = document.createElement('th');
tr1.appendChild(th1);
let th2 = document.createElement('th');
tr1.appendChild(th2);
let th3 = document.createElement('th');
tr1.appendChild(th3);
let th4 = document.createElement('th');
tr1.appendChild(th4);
let th5 = document.createElement('th');
tr1.appendChild(th5);
let th6 = document.createElement('th');
tr1.appendChild(th6);
th.innerHTML = 'ID';
th1.innerHTML = 'Title';
th2.innerHTML = 'Price';
th3.innerHTML = 'Description';
th4.innerHTML = 'Category';
th5.innerHTML = 'Image';
th6.innerHTML = 'Rating';
let thc = [th, th1, th2, th3, th4, th5];
thc.forEach((e) => {
    e.setAttribute('rowspan', '2');
});
th6.setAttribute('colspan', '2');

let tr2 = document.createElement('tr');
table.appendChild(tr2);
let th7 = document.createElement('th');
tr2.appendChild(th7);
let th8 = document.createElement('th');
tr2.appendChild(th8);
th7.innerHTML = 'Rate';
th8.innerHTML = 'Count';

let dataLoader = () => {
    let x = new XMLHttpRequest();
    x.onload = function(){
        if(this.status == 200 && this.readyState == 4){
            let a = JSON.parse(this.responseText);
            let maintab = document.querySelector('#tab1');
            a.forEach((e) => {
                let tr = document.createElement('tr');
                maintab.appendChild(tr);
                for(let i in e){
                    if(i == 'id'){
                        let td = document.createElement('td');
                        tr.appendChild(td);
                        td.innerHTML = e[i];
                    }else if(i == 'title'){
                        let td = document.createElement('td');
                        tr.appendChild(td);
                        td.innerHTML = e[i];
                        td.className = 'tit';
                    }else if(i == 'price'){
                        let td = document.createElement('td');
                        td.innerHTML = e[i];
                        tr.appendChild(td);
                    }else if(i == 'description'){
                        let td = document.createElement('td');
                        td.innerHTML = e[i];
                        tr.appendChild(td);
                        td.className = 'des';
                    }else if(i == 'category'){
                        let td = document.createElement('td');
                        tr.appendChild(td);
                        td.className = 'cat';
                        td.innerHTML = e[i];
                    }else if(i == 'image'){
                        let td = document.createElement('img');
                        td.src = e[i];
                        td.className = 'img';
                        tr.appendChild(td);
                    }else if(i == 'rating'){
                        if(e[i].count > 0){
                            let td = document.createElement('td');
                            tr.appendChild(td);
                            td.innerHTML = e[i].count;
                        }
                        if(e[i].rate > 0){
                            let td = document.createElement('td');
                            tr.appendChild(td);
                            td.innerHTML = e[i].rate;
                        }
                    }
                }
            });
        }else{
            document.write("URL not working");
        }
    }
    x.open('GET', 'https://fakestoreapi.com/products', true);
    x.send();
};
dataLoader();