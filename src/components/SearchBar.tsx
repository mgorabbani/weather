import React, { useState } from "react";

interface SearchBarProps {
  setCity: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setCity }) => {
  const [input, setInput] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a city"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
