const url = 'https://api.thecatapi.com/v1/images/search'

const getCat = async () =>{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let cImage = document.querySelector('#cImage');
    let rand = Math.floor(Math.random() * data.length);
    cImage.src = data[rand].url;
}

getCat();