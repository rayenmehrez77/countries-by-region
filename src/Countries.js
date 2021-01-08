import React from "react";
import "./Countries.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Country from "./Country";
import Loading from "./Loading";

function Countries({ loading, handleRegion, handleSearch, filteredCountries }) {
  return (
    <div className="countries">
      <div className="countries__control">
        <form className="countries__input">
          <BiSearchAlt2 className="search__icon" />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={handleSearch}
          />
        </form>
        <div className="countries__region">
          <select onChange={handleRegion}>
            <option value="all">All</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="countries__all">
        {loading ? (
          <Loading className="loading" />
        ) : (
          filteredCountries.map((country, index) => {
            return <Country key={index} {...country} />;
          })
        )}
      </div>
    </div>
  );
}

export default Countries;
