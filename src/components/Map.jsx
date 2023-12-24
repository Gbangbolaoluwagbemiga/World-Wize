import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Hello</h1>
      <p>{lat}</p>
      <p onClick={() => setSearchParams({lat: 245})}>{lng}</p>
    </div>
  );
}

export default Map;
