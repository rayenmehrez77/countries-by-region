import React from "react";
import "./Country.css";

function Country({ name, area, timezones, flag, capital, population, region }) {
  return (
    <div className="country">
      <img src={flag} alt={name} />
      <div className="country__content">
        <h2>{name}</h2>
        <div className="country__info">
          <h5>
            Area: <span>{area}</span>
          </h5>
          <h5>
            Population:{" "}
            <span>
              {population.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </h5>
          <h5>
            Region: <span>{region}</span>
          </h5>
          <h5>
            Capital: <span>{capital}</span>
          </h5>

          <h5>
            Timezone: <span>{timezones[0]}</span>
          </h5>
        </div>
      </div>
      <a href="#">Read more</a>
    </div>
  );
}

export default Country;
