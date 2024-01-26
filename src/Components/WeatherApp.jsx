import React, { useState } from 'react';
import Searchicon from '../Components/Assets/search.png';
import Clearicon from '../Components/Assets/clear.png';
import Cloudicon from '../Components/Assets/cloud.png';
import Drizzleicon from '../Components/Assets/drizzle.png';
import Humidityicon from '../Components/Assets/humidity.png';
import Rainicon from '../Components/Assets/rain.png';
import Snowicon from '../Components/Assets/snow.png';
import Windicon from '../Components/Assets/wind.png';


const WeatherApp = () => {
    
    const [weathericon, setWeathericon] = useState(Cloudicon);

    const ShowWeather = async () => {
    
        const city = document.getElementsByClassName('searchtext');
        const temp = document.getElementsByClassName('tempValue');
        const humi = document.getElementsByClassName('humValue');
        const wind = document.getElementsByClassName('windValue');
    
        if(city[0].value == '') {
            alert("Please Mark City Name to proceed");
        }
        else {
        let Api_Key = 'dd94f859a0e52d6e4767fddf735f04a7';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${Api_Key}`;
        let response = await fetch(url);
        let data = await response.json();
        if(data.cod == "404") {
            alert("Please Mark Valid City Name to Find Weather");
        }
        else{
        city[0].value = data.name;
        temp[0].innerHTML = data.main.temp +" °C";
        humi[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].icon == '01d' || data.weather[0].icon == '01n') {
            setWeathericon(Clearicon);
        }
        else if(data.weather[0].icon == '02d' || data.weather[0].icon == '02n') {
            setWeathericon(Cloudicon);
        }
        else if(data.weather[0].icon == '03d' || data.weather[0].icon == '03n') {
            setWeathericon(Drizzleicon);
        }
        else if(data.weather[0].icon == '04d' || data.weather[0].icon == '04n') {
            setWeathericon(Drizzleicon);
        }
        else if(data.weather[0].icon == '09d' || data.weather[0].icon == '09n') {
            setWeathericon(Rainicon);
        }
        else if(data.weather[0].icon == '10d' || data.weather[0].icon == '10n') {
            setWeathericon(Rainicon);
        }
        else if(data.weather[0].icon == '13d' || data.weather[0].icon == '13n') {
            setWeathericon(Snowicon);
        }
        else {
            setWeathericon(Clearicon);
        }
        }
        }
    }

  return (
    <>
      <div className="container">
        <div className="weatherbox">
            <h1>Browskie's Weather App</h1>    
            <div className="searchBox">
                <input type="text" className="searchtext" placeholder='City Name...' />
                <img src={Searchicon} alt="Search" className="searchicon" onClick={ () => ShowWeather() }/>
            </div>
            <div className="output">
                <div className="tempContainer">
                    <img src={weathericon} alt="" className="temperatureImg" />
                    <h1 className="tempValue">24 °C</h1>
                </div>
                <div className="elements">
                    <div className="humitidityContainer">
                        <img src={Humidityicon} alt="" className="humImg" />
                        <div className="HumidityTexts">
                        <p className="humValue">85 %</p>
                        <p className="subText">Humitidy</p>
                        </div>
                    </div>
                    <div className="windspeedContainer">
                        <img src={Windicon} alt="" className="windImg" />
                        <div className="windspeedTexts">
                        <p className="windValue">26 Km/h</p>
                        <p className="subText">Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    </>
  )
}

export default WeatherApp;
