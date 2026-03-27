import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const submithandler = (e) => {
  e.preventDefault();

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3e53df83b7c9cd0a7390841679b393b&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.cod !== 200) {
        setResult("Error: " + data.message);
      } else {
        setResult(data.main.temp + " °C");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2>Weather App</h2>

            <form onSubmit={submithandler}>
              <br />
              <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleCityChange}
              />
              <br /><br />
              <input type="submit" value="Get Weather" />
            </form>

            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;