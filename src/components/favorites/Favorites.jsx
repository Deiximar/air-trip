import FavoriteCard from "./FavoriteCard";
import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "../../sass/favorite.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";

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
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const [editActive, setEditActive] = useState(false);

  const handleOnClick = () => {
    setEditActive(!editActive);
  };

  const handleDeleteClick = (favToDelete) => {
    const newFavorites = favorites.filter((fav) => fav != favToDelete);

    setFavorites(newFavorites);
  };

  return (
    <div className="container">
      <ul className="favorite-container">
        {favorites.map((favorite, index) => (
          <FavoriteCard
            key={index}
            editActive={editActive}
            onDeleteClick={() => handleDeleteClick(favorite)}
          />
        ))}
      </ul>
      <button className="edit-button" onClick={() => handleOnClick()}>
        {editActive ? (
          <IoClose className="close-icon" />
        ) : (
          <FiEdit2 className="edit-icon" />
        )}
      </button>
    </div>
  );
};

export default Favorites;
