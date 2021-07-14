const apiKey = '1a4e30102c782429abad679e8977ef0a';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

// https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=1a4e30102c782429abad679e8977ef0a
const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const city = document.getElementById('city');
const btnSearch = document.getElementById('search');
btnSearch.addEventListener("click",function(){
    getWeatherData(city.value);
})

function updateUI(data){
    console.log(data);
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temparature').innerText = data.main.temp;
    document.getElementById('condition').innerText = data.weather[0].main;
}