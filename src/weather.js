import React from "react";

import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temp: "10°C",
    imgUrl: <i className="fas fa-cloud"></i>,
    date: "Sat 02 Jan",
    type: "Broken Clouds",
    humidity: "10%",
    windspeed: "5mph"
  };

  return (
    <div className="weather">
      <div className="main">
        <span> {weatherData.imgUrl} </span>
        <span> {weatherData.city} </span>
        <span> {weatherData.temp} </span>
        <span className="measurement">
          <a href="/" className="active">
            °C{" "}
          </a>
          |
          <a href="/" className="fahrenheit-link">
            °F{" "}
          </a>
        </span>
      </div>

      <div className="data-list">
        <div className="row">
          <div className="col-6">
            <p>{weatherData.date}</p>
            <p>{weatherData.type}</p>
          </div>
          <div className="col-6">
            <p>
              <span> Humidity: </span>
              <span> {weatherData.humidity} </span>
            </p>
            <p>
              <span>Wind Speed:</span>
              <span>{weatherData.windspeed}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
