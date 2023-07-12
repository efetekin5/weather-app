export async function changeLocation(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0813f59277914fb8ab564843231007&q=${location}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    let weather = document.querySelector('.weather');
    weather.textContent = weatherData.current.condition.text;

    let place = document.querySelector('.place');
    place.textContent = weatherData.location.name;

    let date = document.querySelector('.date');
    date.textContent = weatherData.current.last_updated;

    let degree = document.querySelector('.degree');
    degree.textContent = `${weatherData.current.temp_c}°C`;

    let weatherIcon = document.querySelector('.weatherIcon');
    if(weatherData.current.condition.text == 'Sunny') {
        weatherIcon.src = 'documents/sunny.png';
    } else if(weatherData.current.condition.text == 'Partly cloudy') {
        weatherIcon.src = 'documents/partlyCloudy.png';
    } else if(weatherData.current.condition.text == 'Overcast') {
        weatherIcon.src = 'documents/partlyCloudy.png';
    } else if(weatherData.current.condition.text == 'Light rain shower') {
        weatherIcon.src = 'documents/lightRain.png';
    } else if(weatherData.current.condition.text == 'Mist') {
        weatherIcon.src = 'documents/mist.png';
    } else if(weatherData.current.condition.text == 'Light rain') {
        weatherIcon.src = 'documents/lightRain.png';
    } else if(weatherData.current.condition.text == 'Clear') {
        weatherIcon.src = 'documents/partlyCloudy.png';
    } else if(weatherData.current.condition.text == 'Rain') {
        weatherIcon.src = 'documents/rain.png';
    } else {
        weatherIcon.src = 'documents/partlyCloudy.png';
    }

    let feelsLike = document.querySelector('.feelsLike');
    feelsLike.textContent = `Feels Like ${weatherData.current.feelslike_c}°C`;

    let humidity = document.querySelector('.humidity');
    humidity.textContent = `${weatherData.current.humidity}%`;

    let windSpeed = document.querySelector('.wind');
    windSpeed.textContent = `Wind Speed ${weatherData.current.wind_kph} KPH`;
}