import { changeLocation } from "./changeLocation";
import { changeToFahrenheit } from "./changeToFahrenheit";
import { changeToCelcius } from "./changeToCelcius";



let locationInput = document.querySelector('.locationInput');
let searchButton = document.querySelector('.searchIcon');
searchButton.addEventListener('click', () => {
    changeLocation(locationInput.value);
    locationInput.textContent = '';
});

locationInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        changeLocation(locationInput.value);
        locationInput.textContent = '';
    }
})

let changeButton = document.querySelector('.changeButton');
changeButton.addEventListener('click', () => {
    let degree = document.querySelector('.degree');
    if(degree.textContent.includes('°C')) {
        changeToFahrenheit(locationInput.value);
    } else {
        changeToCelcius(locationInput.value);
    }
})