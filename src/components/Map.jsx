import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import styles from './Map.module.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  // const position = [lng, lat];

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      {/* <h1>Hello</h1>
      <p>{lat}</p>
      <p onClick={() => setSearchParams({lat: 245})}>{lng}</p> */}
    </div>
  );
}

export default Map;
