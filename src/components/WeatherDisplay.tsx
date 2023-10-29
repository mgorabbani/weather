import React, { useState } from "react";
import { City } from "./SearchBar";
import { kelvinToUnits } from "../lib/utils";
import FavCities from "./FavCities/FavCities";

import "./weather.css";
interface WeatherDisplayProps {
  city?: City;
  setCity: React.Dispatch<React.SetStateAction<City | undefined>>;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city, setCity }) => {
  const [units, setUnits] = useState<"metric" | "imperial">("metric");

  const toggleUnits = () => {
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
  };

  if (!city) return null;

  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <div
          style={{
            padding: 20,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundImage: `url(https://source.unsplash.com/880x300/?${
              city.name + "&" + city.sys.country
            })`,
            backgroundSize: "cover",
            height: "300px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ margin: 0, color: "white" }}>
              {city.name}, {city.sys.country}
            </h1>
            <button onClick={toggleUnits}>
              {units === "metric" ? <p>°C</p> : <p>°F</p>}
            </button>
          </div>
          <FavCities city={city} setCity={setCity} />
        </div>

        <div className="weather-container">
          <div className="weather-column">
            <h3>Current Weather</h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="weather-details">
                <h3>{city.weather[0].description}</h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "3rem" }}>
                  {kelvinToUnits(city.main.temp, units)}
                </h2>
                <p>Real Feel: {kelvinToUnits(city.main.feels_like, units)}</p>
              </div>
            </div>
          </div>
          <div className="weather-column">
            <table className="weather-table">
              <tbody>
                <tr>
                  <td>Humidity</td>
                  <td>{city.main.humidity}%</td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>{city.wind.speed} mph</td>
                </tr>
                <tr>
                  <td>Rain Precipitation</td>
                  <td>{city.rain ? city.rain["1h"] : 0} mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
