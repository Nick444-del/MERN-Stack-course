function viewProducts() {
    let dataLoader = () => {
        let x = new XMLHttpRequest();
        x.onload = function () {
            if (this.status == 200 && this.readyState == 4) {
                let a = JSON.parse(this.responseText);
                let right = document.querySelector('#right');
                right.innerHTML = '';
                a.forEach((e) => {
                    let card = document.createElement('div');
                    card.className = 'card';
                    right.appendChild(card);
                    for (let i in e) {
                        if (i == 'title') {
                            let heading = document.createElement('h4');
                            card.appendChild(heading);
                            heading.innerHTML = e[i];
                        }
                        if (i == 'category') {
                            let tag = document.createElement('p');
                            card.appendChild(tag);
                            tag.className = 'tag';
                            tag.innerHTML = e[i];
                        }
                        if (i == 'image') {
                            let img = document.createElement('img');
                            card.appendChild(img);
                            img.className = 'img';
                            img.src = e[i];
                        }
                        if (i == 'price') {
                            let price = document.createElement('p');
                            card.appendChild(price);
                            price.className = 'price';
                            price.innerHTML = `$${e[i]}`;
                        }
                        if (i == 'description') {
                            let desc = document.createElement('p');
                            card.appendChild(desc);
                            desc.className = 'desc';
                            desc.innerHTML = e[i];
                        }
                    }
                    let btn = document.createElement('button');
                    card.appendChild(btn);
                    btn.innerHTML = 'Add To Cart';
                    btn.className = 'btn';
                });
            }
        }
        x.open('GET', 'https://fakestoreapi.com/products', true);
        x.send();
    };
    dataLoader();
}

function categorySearch() {
    let dataLoader = () => {
        let x = new XMLHttpRequest();
        x.onload = function () {
            if (this.status == 200 && this.readyState == 4) {
                let a = JSON.parse(this.responseText);
                let right = document.querySelector('#right');
                right.innerHTML = '';
                a.forEach((e) => {
                    if (e.category.toLowerCase() == document.querySelector('#categorySearch').value.toLowerCase()) {
                        let card = document.createElement('div');
                        card.className = 'card';
                        right.appendChild(card);
                        for(let i in e){
                            if (i == 'title') {
                                let heading = document.createElement('h4');
                                card.appendChild(heading);
                                heading.innerHTML = e[i];
                            }
                            if (i == 'category') {
                                let tag = document.createElement('p');
                                card.appendChild(tag);
                                tag.className = 'tag';
                                tag.innerHTML = e[i];
                            }
                            if (i == 'image') {
                                let img = document.createElement('img');
                                card.appendChild(img);
                                img.className = 'img';
                                img.src = e[i];
                            }
                            if (i == 'price') {
                                let price = document.createElement('p');
                                card.appendChild(price);
                                price.className = 'price';
                                price.innerHTML = `$${e[i]}`;
                            }
                            if (i == 'description') {
                                let desc = document.createElement('p');
                                card.appendChild(desc);
                                desc.className = 'desc';
                                desc.innerHTML = e[i];
                            }
                        }
                        let btn = document.createElement('button');
                        card.appendChild(btn);
                        btn.innerHTML = 'Add To Cart';
                        btn.className = 'btn';
                    }
                });
            }
        }
        x.open('GET', 'https://fakestoreapi.com/products', true);
        x.send();
    };
    dataLoader();
}