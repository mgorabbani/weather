import React from "react";
import { City } from "./SearchBar";

interface WeatherDisplayProps {
  city: City;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city }) => {
  if (!city) return null;
  return (
    <div>
      <h2>
        Weather for: {city.name}, {city.sys.country}
      </h2>
      <div>
        <h3>Current Weather</h3>
        <p>Temperature: {city.main.temp}°C</p>
        <p>Feels Like: {city.main.feels_like}°C</p>
        <p>Humidity: {city.main.humidity}%</p>
        <p>Wind: {city.wind.speed} mph</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
