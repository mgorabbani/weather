import React, { useCallback, useState } from "react";
import Select from "react-select";
import _ from "lodash";

export interface City {
  id: string;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  rain?: {
    "1h": number;
  };
}

interface SearchBarProps {
  setCity: (city: City) => void;
}

interface OptionType {
  value: string;
  label: string;
}

const API_KEY = "d956fa0dc4a306ea064eba4cb1a68c35";
const BASE_URL = "http://api.openweathermap.org/data/2.5/find";

const SearchBar: React.FC<SearchBarProps> = ({ setCity }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<OptionType[]>([]);
  const [citiesData, setCitiesData] = useState<City[]>([]);

  const fetchCities = useCallback(
    _.debounce(async (input: string) => {
      if (!input) return;

      try {
        const response = await fetch(
          `${BASE_URL}?q=${input}&type=like&mode=json&appid=${API_KEY}&exclude=hourly,current,minutely,alerts`
        );
        const data = await response.json();
        if (response.ok && data && data.list) {
          const cities = data.list.map((city: City) => ({
            value: city.id,
            label: `${city.name}, ${city.sys.country}`,
          }));

          setOptions(cities);
          setCitiesData(data.list);
        } else {
          console.error("Error with the API response:", data);
          setOptions([]);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    }, 1000),
    []
  );

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    fetchCities(newValue);
  };

  const handleChange = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      const selectedCityObject = citiesData.find(
        (city) => city.id === selectedOption.value
      );
      if (selectedCityObject) {
        setCity(selectedCityObject);
      }
      setInputValue(selectedOption.label);
    }
  };

  return (
    <Select
      value={options.find((option) => option.value === inputValue)}
      onInputChange={handleInputChange}
      onChange={(selectedOption: OptionType | null) =>
        handleChange(selectedOption)
      }
      options={options}
      isSearchable={true}
      placeholder="Search for a city"
    />
  );
};

export default SearchBar;
