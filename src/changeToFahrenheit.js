export async function changeToFahrenheit(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0813f59277914fb8ab564843231007&q=${location}`, {mode: 'cors'});
    const weatherData = await response.json();

    let degree = document.querySelector('.degree');
    degree.textContent = `${weatherData.current.temp_f}°F`;

    let feelsLike = document.querySelector('.feelsLike');
    feelsLike.textContent = `Feels Like ${weatherData.current.feelslike_f}°F`;

    let windSpeed = document.querySelector('.wind');
    windSpeed.textContent = `Wind Speed ${weatherData.current.wind_mph} MPH`;

    let changeButton = document.querySelector('.changeButton');
    if(changeButton.textContent == 'Change to F') {
        changeButton.textContent = 'Change to C';
    } else {
        changeButton.textContent = 'Change to F';
    }
}