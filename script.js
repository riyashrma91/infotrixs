document.addEventListener('DOMContentLoaded', function() {
    const weatherData = [
        { 
            location: "New York", 
            temperature: "15°C", 
            humidity: "82%", 
            condition: "Cloudy",
            aqi: "60", 
            wind: "5 km/h", 
            pressure: "1020 hPa",
            feelsLike: "14°C"
        },
        {
            location: "London", 
            temperature: "10°C", 
            humidity: "78%", 
            condition: "Rainy",
            aqi: "40", 
            wind: "10 km/h", 
            pressure: "1012 hPa",
            feelsLike: "9°C"
        },
        {
            location: "Tokyo", 
            temperature: "22°C", 
            humidity: "60%", 
            condition: "Sunny",
            aqi: "70", 
            wind: "15 km/h", 
            pressure: "1005 hPa",
            feelsLike: "25°C"
        },
        {
            location: "Sydney", 
            temperature: "25°C", 
            humidity: "65%", 
            condition: "Sunny",
            aqi: "50", 
            wind: "20 km/h", 
            pressure: "1018 hPa",
            feelsLike: "27°C"
        },
        {
            location: "Paris", 
            temperature: "12°C", 
            humidity: "70%", 
            condition: "Foggy",
            aqi: "55", 
            wind: "7 km/h", 
            pressure: "1015 hPa",
            feelsLike: "12°C"
        }
        // Add more locations as needed
    ];

    document.getElementById('location-select').addEventListener('change', function() {
        const selectedLocation = this.value;
        const result = weatherData.find(data => data.location === selectedLocation);

        if (result) {
            updateWeatherInfo(result);
        } else {
            clearWeatherInfo();
        }
    });

    document.getElementById('toggle-nav').addEventListener('click', function() {
        var nav = document.getElementById('side-nav');
        nav.classList.toggle('hidden');
    });

    function updateWeatherInfo(data) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>${data.location}</h2>
            <p>Temperature: ${data.temperature}</p>
            <p>Humidity: ${data.humidity}</p>
            <p>Condition: ${data.condition}</p>
        `;

        document.getElementById('aqi-value').textContent = data.aqi;
        document.getElementById('wind-value').textContent = data.wind;
        document.getElementById('pressure-value').textContent = data.pressure;
        document.getElementById('feels-like-value').textContent = data.feelsLike;
    }

    function clearWeatherInfo() {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<p>Please select a location to view weather data.</p>`;
        document.getElementById('aqi-value').textContent = '--';
        document.getElementById('wind-value').textContent = '--';
        document.getElementById('pressure-value').textContent = '--';
        document.getElementById('feels-like-value').textContent = '--';
    }
});
