import FavoriteCard from "./FavoriteCard";
import "../../sass/favorite.scss";

const airQuality = () => {
  switch (aqi) {
    case 0 - 50:
      return "Good";
      break;
    case 51 - 100:
      return "Moderate";
      break;
    case 101 - 150:
      return "Unhealthy for Sensitive Groups";
      break;
    case 151 - 200:
      return "Unhealthy";
      break;
    case 201 - 300:
      return "Very Unhealthy";
      break;
    default:
      return "Hazardous";
      break;
  }
};
const Favorites = () => {
  return (
    <ul className="favorite-container">
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </ul>
  );
};

export default Favorites;
