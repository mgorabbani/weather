import React, { useState } from "react";
import { City } from "./SearchBar";
import { kelvinToUnits } from "../lib/utils";

interface WeatherDisplayProps {
  city: City;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city }) => {
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
    <div>
      <img
        src={`https://source.unsplash.com/1600x900/?${city.name}`}
        alt="city"
      />
      <h2>
        Weather for: {city.name}, {city.sys.country}
      </h2>
      <button onClick={toggleUnits}>Toggle Units</button>
      {units === "metric" ? <p>°C</p> : <p>°F</p>}
      <div>
        <h3>Current Weather</h3>
        <p>Temperature: {kelvinToUnits(city.main.temp, units)}</p>
        <p>Feels Like: {kelvinToUnits(city.main.feels_like, units)}</p>
        <p>Humidity: {city.main.humidity}%</p>
        <p>Wind: {city.wind.speed} mph</p>
        <p>Rain Precipitation: {city.rain ? city.rain["1h"] : 0} mm</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
