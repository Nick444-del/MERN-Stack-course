let url = 'https://type.fit/api/quotes';

const getQuote = () => {
    console.log('Getting Started...');
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('.quote').innerText = data[0].text;
    })
}