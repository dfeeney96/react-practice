import React, { useState } from "react";

import "./search.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      setMessage(`It is ${props.temperature} degrees in ${city}`);
    } else {
      setMessage(`Enter a City`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="enter-city"
          placeholder="Enter City"
          onChange={updateCity}
        />
        <input type="submit" className="search-city" value="Search 🌍" />
      </form>
      <div className="button">
        <button>
          Current Location
          <span role="img" aria-label="pin">
            {" "}
            📌{" "}
          </span>
        </button>
      </div>
      <p> {message} </p>
    </div>
  );
}
