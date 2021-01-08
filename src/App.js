import "./App.css";
import Header from "./Header";
import Countries from "./Countries";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://restcountries.eu/rest/v2/all`);
      const newCountries = await response.json();
      setLoading(false);
      setCountries(newCountries);
    } catch (error) {
      alert(error);
    }
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region.toLowerCase() === "all"
        ? countries
        : country.region.toLowerCase().includes(region.toLocaleLowerCase()))
  );

  useEffect(() => fetchCountries(), []);
  return (
    <div className="app">
      <Header />
      <Countries
        countries={countries}
        loading={loading}
        handleSearch={handleSearch}
        handleRegion={handleRegion}
        filteredCountries={filteredCountries}
      />
    </div>
  );
}

export default App;
