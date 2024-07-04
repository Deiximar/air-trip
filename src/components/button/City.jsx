import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import citiesData from '../../data/cities.json'; 

function City() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Form.Select aria-label="Selecciona una ciudad" value={selectedCity} onChange={handleChange}>
      <option value="">CIUDAD</option>
      {Array.isArray(citiesData.cities) && citiesData.cities.map((city, index) => (
        <option key={index} value={city.name}>
          {city.name} {city.name}
        </option>
      ))}
    </Form.Select>
  );
}

export default City;