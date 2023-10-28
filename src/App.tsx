import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const App: React.FC = () => {
  const [city, setCity] = useState<any>();
  const [favoriteCities, setFavoriteCities] = useState<any[]>([]);

  const addFavoriteCity = (city: any) => {
    setFavoriteCities([...favoriteCities, city]);
  };
  const removeFavoriteCity = (city: any) => {
    const newFavoriteCities = favoriteCities.filter(
      (favoriteCity) => favoriteCity.id !== city.id
    );
    setFavoriteCities(newFavoriteCities);
  };
  return (
    <div className="app-container">
      <h1>Weather Application</h1>
      <h2>Favorite Cities</h2>
      <div>
        {favoriteCities.map((favoriteCity, index) => (
          <div key={index}>
            <h3 onClick={() => setCity(favoriteCity)}>{favoriteCity.name}</h3>
            <button onClick={() => removeFavoriteCity(favoriteCity)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={() => addFavoriteCity(city)} disabled={!city}>
          Add
        </button>
      </div>
      <SearchBar setCity={setCity} />
      <WeatherDisplay city={city} />
    </div>
  );
};

export default App;
