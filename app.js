
//api keys
const apiKey = "07ffc551c98e24226adef262435485da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    //end
 //search functionality
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
//end
//weather icon change
const weatherIcon = document.querySelector(".weather-icon");
//end
async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else {
    
    var data = await response.json();
    //display data to html form
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    //end 
    //weather image changer 
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "image/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png ";
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "image/rain.png";
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "image/drizzle.png";
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
//end
}
}
//event for search button when touch or click 
searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value);
});
//end

