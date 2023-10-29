import React, { useState } from "react";

import "./favcities.css";
import { City } from "../SearchBar";

interface FavCitiesProps {
  setCity: React.Dispatch<React.SetStateAction<City | undefined>>;
  city?: City;
}

const FavCities: React.FC<FavCitiesProps> = ({ setCity, city }) => {
  const [favoriteCities, setFavoriteCities] = useState<Set<City>>(new Set());

  const addFavoriteCity = (city: City) => {
    if (!favoriteCities.has(city)) {
      setFavoriteCities(new Set([...favoriteCities, city]));
    }
  };

  const removeFavoriteCity = (city: City) => {
    favoriteCities.delete(city);
    setFavoriteCities(new Set([...favoriteCities]));
  };

  if (!city) return null;

  return (
    <div className="container-favcities">
      <button onClick={() => addFavoriteCity(city)} disabled={!city}>
        Save City
      </button>
      <div className="cityList">
        {[...favoriteCities].map((favoriteCity) => (
          <div key={favoriteCity.id} className="cityItem">
            <span onClick={() => setCity(favoriteCity as City)}>
              {favoriteCity.name}
            </span>
            <button
              onClick={() => removeFavoriteCity(favoriteCity)}
              className="removeButton"
            >
              <span>X</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavCities;
