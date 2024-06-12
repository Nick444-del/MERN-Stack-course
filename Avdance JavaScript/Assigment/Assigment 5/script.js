let dataLoader = () => {
    let x = new XMLHttpRequest();

    x.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            let a = JSON.parse(this.responseText);
            let maindata = document.querySelector('#main');
            a.forEach((e) => {
                let box = document.createElement('div');
                box.className = 'box';
                maindata.appendChild(box); 

                for (let i in e) {
                    if (i == 'id') {
                        let h1 = document.createElement('h1');
                        box.appendChild(h1);
                        h1.innerHTML = `${i} ${e[i]}`;
                    } else if (i == 'title') {
                        let h2 = document.createElement('h2');
                        box.appendChild(h2);
                        h2.innerHTML = `<b>${i}</b>: ${e[i]}`;
                    } else if (i == 'body') {
                        let p = document.createElement('p');
                        box.appendChild(p);
                        p.innerHTML = `<b>${i}</b>: ${e[i]}`;
                    }
                }
                let btn1 = document.createElement('a');
                box.appendChild(btn1);
                btn1.innerHTML = 'Read More';
                btn1.addEventListener('click', () => {
                    let modal = document.createElement('div');
                    modal.className = 'modal';
                    modal.style.overflow = 'auto';
                    document.body.appendChild(modal);
                    modal.style.display = 'flex';
                    modal.style.alignItems = 'center';
                    modal.style.justifyContent = 'center';
                    let card = document.createElement('div');
                    card.className = 'card';
                    modal.appendChild(card);
                    let card_h1 = document.createElement('h1');
                    card.appendChild(card_h1);
                    card_h1.innerHTML = "ID "+e.id;
                    let card_h2 = document.createElement('h2');
                    card.appendChild(card_h2);
                    card_h2.innerHTML = "Title: "+e.title;
                    let card_body = document.createElement('p');
                    card.appendChild(card_body);
                    card_body.innerHTML = "Body: "+e.body;
                    let btn_close = document.createElement('button');
                    card.appendChild(btn_close);
                    btn_close.innerHTML = 'Close';
                    btn_close.addEventListener('click', () => {
                        modal.style.display = 'none';
                    });
                });
            });
            
        }
    }
    x.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    x.send();
};

dataLoader();