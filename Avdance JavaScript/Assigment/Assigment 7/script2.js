let dataload = () => {
    let x = new XMLHttpRequest();

    x.open('GET', 'https://fakestoreapi.com/products', true);
    x.send();

    x.onload = function () {
        console.log(this.status);
        if (this.status == 200 && this.readyState == 4) {
            let a = this.responseText;
            sessionStorage.setItem('data', a);
        }
    }
}

dataload();
let data = sessionStorage.getItem('data');
data = JSON.parse(data);
let right = document.querySelector('#right');

function tampelet(a){
    let code = `<div class="card">
                    <h4>${a.title}</h4>
                    <p class="tag">${a.category}</p>
                    <img class="img" src=${a.image} alt="">
                    <p class="price">$${a.price}</p>
                    <p class="desc">${a.description}</p>
                    <button class="btn">Add To Cart</button>
                </div>`
    return code;
}

function viewProducts() {
    let card = data.map((y, z) => tampelet(y));
    right.innerHTML = card;
    console.log(card);
}

function categorySearch() {
    let category = document.querySelector('.tag').value;
    // category.toLowerCase();
    let card = data.filter((y, z) => y.category.toLowerCase() == category).map((m,n) => tampelet(m));
    right.innerHTML = card;
}
