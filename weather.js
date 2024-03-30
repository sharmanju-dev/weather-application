const apikey ="275bed615cab540c1909a926daef2fb4";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathorIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
        if(data.weather[0].main == "clouds"){
    
            weathorIcon.src = "./image/clouds.png";
    
        }
         else if(data.weather[0].main == "clear"){
    
            weathorIcon.src = "./image/clear.png";
    
        }
        else if(data.weather[0].main == "Rain"){
    
            weathorIcon.src = "./image/rain.png";
    
        }
    
        else if(data.weather[0].main == "drizzel"){
    
            weathorIcon.src = "./image/drizzle.png";
    
        }
    
        else if(data.weather[0].main == "Mist"){
    
            weathorIcon.src = "./image/mist.png";
    
        }
    
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display = "none";
    }
    

}


searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

