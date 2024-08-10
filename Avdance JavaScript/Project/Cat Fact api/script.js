const url = 'https://cat-fact.herokuapp.com/facts';

const getFact = async () => {
    let response = await fetch(url);
    let data = await response.json();
    let fact = document.querySelector('#fact');
    let randNum = Math.floor(Math.random() * data.length);
    fact.innerHTML = data[randNum].text;
}

getFact();