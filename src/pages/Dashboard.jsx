import City from "../components/button/City.jsx";
import Country from "../components/button/Country.jsx";
import Favorites from "../components/favorites/Favorites.jsx";

const Dashboard = () => {
  return <div>
    <Country />
    <City />
    <Favorites/>
  </div>;
};

export default Dashboard;

// import { useState, useEffect } from 'react';
// import MapCard from '../components/map/MapCard.jsx'; 

// const Dashboard = () => {
//   // Simulated data fetching
//   const [aqData, setAqData] = useState(null);

//   useEffect(() => {
//     // Example data
//     const testData = {
//       city: {
//         name: "Test City",
//         geo: [40.7128, -74.0060]
//       },
//       aqi: 42
//     };


//     setAqData(testData);
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {}
//       <MapCard data={aqData} />
//     </div>
//   );
// };

// export default Dashboard;