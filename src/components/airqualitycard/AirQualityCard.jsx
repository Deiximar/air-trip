
import PropTypes from 'prop-types';

const AirQualityCard = ({ city, aqi, pm25, pm10, o3 }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{city}</h5>
      </div>
      <div className="card-body">
        <p>Índice de Calidad del Aire (AQI): {aqi}</p>
        <p>Partículas PM2.5: {pm25 ? pm25 : 'No disponible'}</p>
        <p>Partículas PM10: {pm10 ? pm10 : 'No disponible'}</p>
        <p>Ozono O3: {o3 ? o3 : 'No disponible'}</p>
      </div>
    </div>
  );
};

AirQualityCard.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
  pm25: PropTypes.number,
  pm10: PropTypes.number,
  o3: PropTypes.number,
};

export default AirQualityCard;

// manera de llamar a la api en la card de dashboard? lo dejo aqui comentado por si es util
// import React, { useState, useEffect } from 'react';
// import AirQualityCard from '../components/airqualitycard/AirQualityCard';

// const Dashboard = () => {
//   const [aqData, setAqData] = useState(null); 

//   useEffect(() => {
    
//     const fetchData = async () => {
//       try {
        
//         const response = await fetch('https://api.example.com/air-quality-data');
//         if (!response.ok) {
//           throw new Error('Error al obtener los datos');
//         }
//         const data = await response.json();
//         setAqData(data);
//       } catch (error) {
//         console.error('Error fetching air quality data:', error);
//       }
//     };

//     fetchData(); 

//     return () => {
      
//     };
//   }, []); 

//   return (
//     <div className="container">
//       <h1>Dashboard</h1>
//       {aqData ? (
//         <AirQualityCard
//           city={aqData.city}
//           aqi={aqData.aqi}
//           pm25={aqData.pm25}
//           pm10={aqData.pm10}
//           o3={aqData.o3}
//         />
//       ) : (
//         <p>Cargando datos...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
