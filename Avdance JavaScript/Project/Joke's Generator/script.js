let jokeBox = document.querySelector('#container');
let btn = document.querySelector('#btn1');
let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

function getJoke() {
    let dataLoader = () => {
        let x = new XMLHttpRequest();
        x.onload = function () {
            if (this.status == 200 && this.readyState == 4) {
                let a = JSON.parse(this.responseText);
                let joke = document.querySelector('#joke');
                joke.innerHTML = a.joke;
            }
        }
        x.open('GET', url, true);
        x.send();
    }
    dataLoader();
}

getJoke();