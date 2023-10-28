import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import Header from "./components/Header/Header";
import { City } from "./components/SearchBar";

const App: React.FC = () => {
  const [city, setCity] = useState<City | undefined>();

  return (
    <section>
      <Header setCity={setCity} />
      <WeatherDisplay city={city} setCity={setCity} />
      {!city && (
        <div className="container">
          <div style={{ marginTop: "2rem" }}>
            <h3>Search for a city to get started!</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
