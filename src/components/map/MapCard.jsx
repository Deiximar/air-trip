// src/components/MapCard.jsx
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Map from './Map';

const MapCard = ({ data }) => {
  if (!data || !data.city || !data.city.geo) {
    return <p>Datos incompletos...</p>;
  }

  return (
    <Card className="m-3">
      <Card.Header>Air Quality Map</Card.Header>
      <Card.Body style={{ height: '500px' }}>
        <Map data={data} />
      </Card.Body>
    </Card>
  );
};

MapCard.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      geo: PropTypes.arrayOf(PropTypes.number).isRequired
    }).isRequired,
    aqi: PropTypes.number.isRequired
  }).isRequired
};

export default MapCard;
