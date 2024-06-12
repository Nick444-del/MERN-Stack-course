function viewProducts(){
    let dataLoader = () => {
        let x = new XMLHttpRequest();
        x.onload = function () {
            if (this.status == 200 && this.readyState == 4) {
                let a = JSON.parse(this.responseText);
                let right = document.querySelector('#right');
                a.forEach((e) => {
                    let card = document.createElement('div');
                    card.className = 'card';
                    right.appendChild(card);
                });
            }
        }
    
        x.open('GET', 'https://fakestoreapi.com/products', true);
        x.send();
    };

    dataLoader();
}