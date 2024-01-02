import {useNavigate, useSearchParams} from 'react-router-dom';
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

function Map() {
  const [position, setPosition] = useState([23, 1]);
  const {cities} = UseCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  useEffect(
    function () {
      if (lat && lng) setPosition([lat, lng]);
    },
    [lng, lat]
  );

  return (
    <div className={styles.mapContainer}>
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

  useMapEvents({click: e => navigate('form')});
}

export default Map;
