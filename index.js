// client.js

document.addEventListener('DOMContentLoaded', async () => {
  const citySelect = document.getElementById('citySelect');
  const temperatureDisplay = document.getElementById('temperatureDisplay');
  const windspeedDisplay = document.getElementById('windspeedDisplay');

  try {
    const response = await fetch('http://localhost:3000/cities');
    const data = await response.json();

    data.forEach(city => {
      const option = document.createElement('option');
      option.value = city.city_name;
      option.textContent = city.city_name;
      citySelect.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }

  const weatherButton = document.getElementById('weatherButton');
  weatherButton.addEventListener('click', async () => {
    const selectedCity = encodeURIComponent(citySelect.value);

    try {
      const cityInfoResponse = await fetch(`http://localhost:3000/city/${selectedCity}`);
      const cityInfo = await cityInfoResponse.json();

      console.log(cityInfo)

      const latitude = cityInfo[0]['latitude '].match(/-?[\d.]+/)[0];
      const longitude = cityInfo[0]['longitude '].match(/-?[\d.]+/)[0];

      const openMeteoResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await openMeteoResponse.json();

      // Extract temperature and windspeed from the Open Meteo API response
      const temperature = weatherData.current_weather.temperature;
      const windspeed = weatherData.current_weather.windspeed;
      const weathercode = weatherData.current_weather.weathercode

      // Display the temperature and windspeed on the webpage
      temperatureDisplay.textContent = `Temperature: ${temperature}°C`;
      windspeedDisplay.textContent = `Windspeed: ${windspeed} km/h`;
      weathercodeDisplay.innerHTML = `WMO Code: <a href="https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM" target="_blank">${weathercode}</a>`;
      
    } catch (error) {
      console.error(error);
    }
  });
});

