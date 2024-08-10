let url = 'https://dog.ceo/api/breeds/image/random';

const getPic = async () => {
    console.log('Getting response....');
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let img = document.querySelector('.dImage');
    let dImg = document.createElement('img');
    dImg.src = data.message;
    img.appendChild(dImg);
}

getPic();