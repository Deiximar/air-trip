import { FaWind } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteCard = ({ editActive, onDeleteClick }) => {
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
      {editActive ? (
        <FaTrashAlt className="trash-icon" onClick={onDeleteClick} />
      ) : (
        ""
      )}
    </li>
  );
};

export default FavoriteCard;
