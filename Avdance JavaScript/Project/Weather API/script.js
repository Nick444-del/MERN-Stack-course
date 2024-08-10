const place = 'Mumbai';
const key = '13ce6bbe3a0be7e98c4392cb64e5c2e0';
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+place+'&appid='+key+'&units=metric';

let getWeather = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const search = document.getElementById('search').value;

    if(search == ''){
        document.getElementById('temp').innerHTML = 'Please enter city name';
    }

    document.getElementById('temp').innerHTML = `${data.main.feels_like} &deg;C`;
}

getWeather();