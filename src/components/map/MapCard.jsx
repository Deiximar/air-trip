// src/components/MapCard.jsx
import PropTypes from "prop-types";
import Map from "./Map";
import "../../sass/map.scss";

const MapCard = ({ data }) => {
  if (!data || !data.city || !data.city.geo) {
    return <p>Datos incompletos...</p>;
  }

  return (
    <div className="">
      <div className="">
        <div className="map-container">
          <Map data={data} />
        </div>
      </div>
    </div>
  );
};

MapCard.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      geo: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    aqi: PropTypes.number.isRequired,
  }).isRequired,
};

export default MapCard;
