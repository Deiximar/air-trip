import { useState } from 'react';
import countriesData from '../../data/countries.json';

function Country() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <select aria-label="Selecciona un país" value={selectedCountry} onChange={handleChange} data-testid="country-select">
      <option value="">PAIS</option>
      {Array.isArray(countriesData.countries) && countriesData.countries.map((country, index) => (
        <option key={index} value={country.name}>
          {country.es_name}
        </option>
      ))}
    </select>
  );
}

export default Country;