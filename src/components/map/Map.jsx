import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = ({ data }) => {

  if (!data || !data.city || !data.city.geo) {
    return <p>Datos del mapa no disponibles...</p>;
  }

  const { city, aqi } = data;
  const position = city.geo;

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <div>
            <h5>{city.name}</h5>
            <p>Índice de Calidad del Aire (AQI): {aqi}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      geo: PropTypes.arrayOf(PropTypes.number).isRequired
    }),
    aqi: PropTypes.number
  })
};

export default Map;
