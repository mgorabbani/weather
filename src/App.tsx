import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d956fa0dc4a306ea064eba4cb1a68c35
const App: React.FC = () => {
  const [city, setCity] = useState<any>();

  return (
    <div className="app-container">
      <h1>Weather Application</h1>
      <SearchBar setCity={setCity} />
      <WeatherDisplay city={city} />
    </div>
  );
};

export default App;
