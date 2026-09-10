const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const weatherCard = document.getElementById('weatherCard');
const welcomeMessage = document.getElementById('welcomeMessage');

// Event listeners
searchBtn.addEventListener('click', fetchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeather();
    }
});

function fetchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    // Show loading, hide others
    loadingSpinner.style.display = 'block';
    errorMessage.style.display = 'none';
    weatherCard.style.display = 'none';
    welcomeMessage.style.display = 'none';
    
    // Fetch weather data
    fetch(`/weather?city=${encodeURIComponent(city)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            loadingSpinner.style.display = 'none';
        })
        .catch(error => {
            showError(error.message || 'City not found. Please try again.');
            loadingSpinner.style.display = 'none';
        });
}

function displayWeather(data) {
    // Update weather card
    document.getElementById('cityName').textContent = data.city;
    document.getElementById('countryCode').textContent = data.country;
    document.getElementById('temperature').textContent = Math.round(data.temperature);
    document.getElementById('feelsLike').textContent = `Feels like ${Math.round(data.feels_like)}°C`;
    document.getElementById('description').textContent = data.description;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.wind_speed} m/s`;
    document.getElementById('pressure').textContent = `${data.pressure} hPa`;
    
    // Weather icon from OpenWeatherMap
    const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;
    document.getElementById('weatherIcon').src = iconUrl;
    
    // Show weather card
    weatherCard.style.display = 'block';
    errorMessage.style.display = 'none';
    welcomeMessage.style.display = 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    weatherCard.style.display = 'none';
    welcomeMessage.style.display = 'block';
}