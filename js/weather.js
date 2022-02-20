function getPositionSuccess(ok) {
  const longitude = ok.coords.longitude;
  const latitude = ok.coords.latitude;
  const API_KEY = "07b93dd82c71187ce618dfeb43679285";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  console.log(URL);

  fetch(URL)
    .then((response) => response.json())
    .then((wData) => {
      const position = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      position.innerText = wData.name;
      weather.innerText = ` @ ${wData.main.temp}°C @ ${wData.weather[0].main}`;
    });
}

function getPositionError() {
  alert("Can't access your GPS");
}

navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
