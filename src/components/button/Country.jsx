import { useState } from 'react';
import countriesData from '../../data/countries.json';

function Country() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div aria-label="Selecciona un país" value={selectedCountry} onChange={handleChange}>
      <option value="">PAIS</option>
      {Array.isArray(countriesData.countries) && countriesData.countries.map((country, index) => (
        <option key={index} value={country.name}>
          {country.es_name}
        </option>
      ))}
    </div>
  );
}

export default Country;