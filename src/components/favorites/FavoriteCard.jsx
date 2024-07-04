import { FaWind } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteCard = () => {
  return (
    <li className="item-favorite">
      <div className="favorite-card">
        <h6 className="title">Air Quality in </h6>
        <div className="quality-info-container">
          <div>
            <FaWind className="wind-icon" />
          </div>
          <div className="quality-info">
            <small>100</small>
            <small>Good</small>
          </div>
        </div>
      </div>
      <FaTrashAlt className="trash-icon" />
    </li>
  );
};

export default FavoriteCard;
