const url = "https://fakestoreapi.com/products";

const viewProducts = async () => {
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector('.container').innerHTML = "";
    // console.log(data);
    data.forEach((e) => {
        // console.log(e);
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = ``;
        let h4 = document.createElement("h4");
        h4.innerText = e.title;
        let p = document.createElement("p");
        p.innerText = e.category;
        p.className = "tag";
        let img = document.createElement("img");
        img.src = e.image;
        img.className = "img";
        let p1 = document.createElement("p");
        p1.className = "price";
        p1.innerText = "$" + e.price;
        let p2 = document.createElement("p");
        p2.className = "desc";
        p2.innerText = e.description;
        let btn = document.createElement("button");
        btn.className = "btn1";
        btn.innerText = "Add To Cart";
        card.append(h4, p, img, p1, p2, btn);
        document.querySelector(".main .container").append(card);
    });
}

const search = async () => {
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector('.container').innerHTML = "";
    data.forEach((e) => {
        if (e.category == document.querySelector('#search').value.toLowerCase()) {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = ``;
            let h4 = document.createElement("h4");
            h4.innerText = e.title;
            let p = document.createElement("p");
            p.innerText = e.category;
            p.className = "tag";
            let img = document.createElement("img");
            img.src = e.image;
            img.className = "img";
            let p1 = document.createElement("p");
            p1.className = "price";
            p1.innerText = "$" + e.price;
            let p2 = document.createElement("p");
            p2.className = "desc";
            p2.innerText = e.description;
            let btn = document.createElement("button");
            btn.className = "btn1";
            btn.innerText = "Add To Cart";
            card.append(h4, p, img, p1, p2, btn);
            document.querySelector(".main .container").append(card);
        }else if(document.querySelector('#search').value == "all"){
            document.querySelector('.container').innerHTML = "";
            viewProducts();
        }else if(e.title == document.querySelector('#search').value.toLowerCase()){
            document.querySelector('.container').innerHTML = "";
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = ``;
            let h4 = document.createElement("h4");
            h4.innerText = e.title;
            let p = document.createElement("p");
            p.innerText = e.category;
            p.className = "tag";
            let img = document.createElement("img");
            img.src = e.image;
            img.className = "img";
            let p1 = document.createElement("p");
            p1.className = "price";
            p1.innerText = "$" + e.price;
            let p2 = document.createElement("p");
            p2.className = "desc";
            p2.innerText = e.description;
            let btn = document.createElement("button");
            btn.className = "btn1";
            btn.innerText = "Add To Cart";
            card.append(h4, p, img, p1, p2, btn);
            document.querySelector(".main .container").append(card);
        }
    });
}

function hide() {
    document.querySelector('.container').innerHTML = "";
}