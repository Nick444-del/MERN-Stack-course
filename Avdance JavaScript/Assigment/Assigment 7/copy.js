function fun1(){
    let x =new XMLHttpRequest();

    x.open("GET","https://fakestoreapi.com/products",true);
    x.send();

    x.onload = function(){
        console.log(this.status)
        if(this.status == 200 && this.readyState == 4){
            let a = this.responseText;
            sessionStorage.setItem("data",a)
        }
    }
}

fun1()
let data = sessionStorage.getItem("data");
data = JSON.parse(data)
let card_box = document.querySelector("#card_box");
// console.log(data)

function fun2(a){
    let code =  `<div class="card">
                    <h2 class="title">${a.title} </h2>
                    <span class="cat">${a.category}</span>
                    <p class="description">${a.description}</p>
                    <div class="image">
                        <img src="${a.image}" alt="">
                    </div>
                    <span class="rating">Rating : ${a.rating.rate}</span><br>
                    <a href="#"><button class="buy_btn">BUY NOW</button></a>
                    <h3 class="price">Price : $ ${a.price}</h3>
                </div> `
    return code;
}

function allcard(){
    let cardHtml = data.map((y,z)=>fun2(y)); 
    card_box.innerHTML = cardHtml 
    console.log("all")
}
// all()

function check(){
    let cardHtml =  data.filter((y,z)=> y.price <= 100).map((m,n)=> fun2(m));
    card_box.innerHTML = cardHtml
}
// check()

function Categories(){
    let cat = document.querySelector("#Categories").value.trim().toLowerCase();
    let cardHtml = data.filter((y,z)=> y.category.toLowerCase()==cat).map((m,n)=> fun2(m));
    card_box.innerHTML = cardHtml
}
// Categories()


function rating(){
    let rfrom = document.querySelector("#rating_from").value;
    let rto =  document.querySelector("#rating_to").value;
    let cardHtml = data.filter((y,z)=>  y.rating.rate >= rfrom && y.rating.rate <= rto ||y.rating.rate <= rfrom && y.rating.rate >= rto ).map((m,n)=>fun2(m))
    card_box.innerHTML = cardHtml
    console.log(cardHtml)
}
// rating()