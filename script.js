let searchBtn = document.getElementById("searchBtn");
let cityInput = document.getElementById("cityInput");

let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

let apiKey = "d0e4841ecc833d3c53bb2512f7d5bb2d";

searchBtn.onclick = function () {

    let cityName = cityInput.value;

    if (cityName == "") {
        alert("Please enter a city name.");
        return;
    }

    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";

    fetch(weatherURL)

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
             console.log(data);

            if (data.cod == "404") {
                alert("City not found!");
                return;
            }

            city.innerHTML = data.name;
            temperature.innerHTML = data.main.temp + " °C";
            description.innerHTML = "Weather: " + data.weather[0].description;;
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind Speed: " + data.wind.speed + " m/s";

        })

        .catch(function (error) {
    console.log(error);
    alert("Something went wrong!");
});

};