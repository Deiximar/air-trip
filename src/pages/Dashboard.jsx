import City from "../components/button/City.jsx";
import Country from "../components/button/Country.jsx";
import Favorites from "../components/favorites/Favorites.jsx";
import FavButton from "../components/button/FavButton.jsx";
import "../sass/dashboard.scss";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext.jsx";

const Dashboard = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const handleOnClick = () => {
    setFavorites([...favorites, {}]);
  };

  return (
    <div className="dashboard-container">
      <div className="left-side">{favorites.length ? <Favorites /> : ""}</div>

      <div className="right-side">
        <div className="dashboard-header">
          <Country />
          <City />
          <FavButton onClick={handleOnClick} />
        </div>
      </div>
    </div>
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
