import { useState } from "react";
import countriesData from "../../data/countries.json";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Country() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="selecter">
      <select
        aria-label="Selecciona un país"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="">País</option>
        {Array.isArray(countriesData.countries) &&
          countriesData.countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.es_name}
            </option>
          ))}
      </select>
      <IoIosArrowDown className="arrow-down-icon" />
    </div>
  );
}

export default Country;
