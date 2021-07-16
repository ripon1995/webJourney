const firstDiv = document.getElementById('countries');
const secondDiv = document.createElement('div');
networkApi();

function networkApi() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries2(data))
}

function displayCountries(country) {
    const firstDiv = document.getElementById('countries');
    for(let i=0;i<country.length;i++){
        const name = country[i].name;
        const capital = country[i].capital;
        
        const header3 = document.createElement('h3');
        const paragraph = document.createElement('p');
        header3.innerText = name;
        paragraph.innerText ="Capital: " +capital;
        secondDiv.appendChild(header3);
        secondDiv.appendChild(paragraph);
        firstDiv.appendChild(secondDiv);
        console.log(name);
    }
}

function displayCountries2(country) {
    
    for(let i=0;i<country.length;i++){
        const name = country[i].name;
        const capital = country[i].capital;
        const secondDiv = document.createElement('div');
        secondDiv.className = 'country-container';
        secondDiv.id = name;
        const countryInfo =`
                <h3 class='country-name'>${name}</h3>
                <p>capital: ${capital}</p>
                <button onclick="countryDetails('${name}')">Details</button>
        `;
        secondDiv.innerHTML = countryInfo;
        firstDiv.appendChild(secondDiv);
        
    }
}

function countryDetails(name){
    getDataForSingleCountry(name);
}

function getDataForSingleCountry(name){
    fetch('https://restcountries.eu/rest/v2/name/'+name)
    .then(response => response.json())
    .then(data => displayData(data));
}

function displayData(data){
    console.log(data[0].name);
    console.log(data[0].flag);
    const flagShow = document.getElementById(data[0].name);
    flagShow.innerHTML =`<img src="${data[0].flag}" width="600PX" height="250px">`;
}