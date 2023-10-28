import React, { useState } from "react";

import "./favcities.css";
import { City } from "../SearchBar";
interface FavCity {
  id: string;
  name: string;
}

interface FavCitiesProps {
  setCity: React.Dispatch<React.SetStateAction<City | undefined>>;
  city?: FavCity;
}

const FavCities: React.FC<FavCitiesProps> = ({ setCity, city }) => {
  const [favoriteCities, setFavoriteCities] = useState<Set<FavCity>>(new Set());

  const addFavoriteCity = (city: FavCity) => {
    if (!favoriteCities.has(city)) {
      setFavoriteCities(new Set([...favoriteCities, city]));
    }
  };

  const removeFavoriteCity = (city: FavCity) => {
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
