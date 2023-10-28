import SearchBar, { City } from "../SearchBar";
import "./header.css";

type HeaderProps = {
  setCity: React.Dispatch<React.SetStateAction<City | undefined>>;
};

const Header = ({ setCity }: HeaderProps) => {
  return (
    <header>
      <div className="container">
        <h1>WEATHER</h1>
        <SearchBar setCity={setCity} />
      </div>
    </header>
  );
};
export default Header;
