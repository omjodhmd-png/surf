
  const apiKey = "7d84ba40b47d4801b000521875835ed0";
  const city = "taghazout,MA";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById("hott").textContent = `${data.main.temp}°C`;
      document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
      document.getElementById("wav").textContent = `${data.main.humidity}%`;
    })
    .catch(error => {
      console.error(error);
    });

