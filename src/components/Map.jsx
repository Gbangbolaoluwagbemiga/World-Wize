import {useNavigate} from 'react-router-dom';
import styles from './Map.module.css';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import {useEffect, useState} from 'react';
import {UseCities} from '../context/CitiesContext';
import Button from './Button';
import {useGeolocation} from '../hooks/UseGeolocation';
import {useUrlPosition} from '../hooks/useUrlPosition';

function Map() {
  const {isLoading, userPosition, error, getPosition} = useGeolocation();
  const [lat, lng] = useUrlPosition();

  const [position, setPosition] = useState([23, 1]);
  const {cities} = UseCities();

  useEffect(
    function () {
      if (lat && lng) setPosition([lat, lng]);
    },
    [lng, lat]
  );

  useEffect(
    function () {
      if (userPosition) setPosition([userPosition.lat, userPosition.lng]);
    },
    [userPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!userPosition && (
        <Button type="position" onclick={getPosition}>
          {isLoading ? 'Loading' : 'Use Your Location'}
        </Button>
      )}
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map(city => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span> {city.emoji}</span> <span> {city.cityName}</span>{' '}
            </Popup>
          </Marker>
        ))}

        <ChangePosition position={position} />
        <HandleClicks />
      </MapContainer>
    </div>
  );
}

function ChangePosition({position}) {
  const map = useMap();
  map.setView(position);
  return null;
}
function HandleClicks() {
  const navigate = useNavigate();

  useMapEvents({
    click: e => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
