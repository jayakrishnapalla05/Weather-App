const apiKey = "d19e60aa8367dd2c799343b7d5c0e1a7";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherStatus = document.querySelector(".weather");
const error = document.querySelector(".error");

async function weather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  if (response.status == "404") {
      error.style.display = "block";
      weatherStatus.style.display="none";
    } else {
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.png";
    }
}


  cityName.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°c";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";

  weatherStatus.style.display = "block";
  error.style.display = "none";
}



searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
});
