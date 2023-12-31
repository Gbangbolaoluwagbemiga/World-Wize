import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import styles from './Map.module.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {useState} from 'react';
import {UseCities} from '../context/CitiesContext';

function Map() {
  const navigate = useNavigate();
  const [position, setPosition] = useState([49, 23]);
  const {cities} = UseCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
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
      </MapContainer>
    </div>
  );
}

export default Map;
