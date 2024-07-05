import City from "../components/button/City.jsx";
import Country from "../components/button/Country.jsx";
import ImputDashboard from "../components/dashboard/imputDashboard.jsx";
import Favorites from "../components/favorites/Favorites.jsx";
import CardTop10Country from "../components/sidebar/CardTop10.jsx";
import FavButton from "../components/button/FavButton.jsx";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext.jsx";
import AirQualityCard from "../components/airqualitycard/AirQualityCard.jsx";
import MapCard from "../components/map/MapCard.jsx";
import "../sass/dashboard.scss";

const Dashboard = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const handleOnClick = () => {
    setFavorites([...favorites, {}]);
  };

  return (
    <div className="dashboard-container">
        <div className="left-side">{favorites.length ? <Favorites /> : ""}
        <Favorites />
        <CardTop10Country/>
      </div>


      <div className="right-side">
        <div className="dashboard-header">
          <Country />
          <City />
          <ImputDashboard />
        </div>
        <div className="dashboardData">
          <div className="dataCard">
          <FavButton onClick={handleOnClick} />
        </div>
        <div className="dashboard-body">
          <AirQualityCard />
          <MapCard />
        </div>
      </div>
    </div>
    </div >
  );
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
