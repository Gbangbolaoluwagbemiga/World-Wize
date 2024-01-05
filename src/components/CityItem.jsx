import {Link} from 'react-router-dom';
import styles from './CityItem.module.css';
import {UseCities} from '../context/CitiesContext';
const formatDate = date =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({city}) {
  const {cityName, emoji, date, id, position} = city;
  const {lat, lng} = position;

  const {currentCity, deleteCity} = UseCities();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem}  ${
          currentCity.id === id ? styles['cityItem--active'] : ''
        } `}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          {' '}
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
