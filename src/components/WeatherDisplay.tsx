import React from "react";

interface WeatherDisplayProps {
  city: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city }) => {
  return (
    <div>
      <h2>Weather for: {city}</h2>
      <div>
        <h3>Current Weather</h3>
        <p>Temperature: 75</p>
        <p>Feels Like: 75</p>
        <p>Humidity: 50</p>
        <p>Wind: 5 mph</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
