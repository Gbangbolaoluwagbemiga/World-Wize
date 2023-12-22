import styles from './CityItem.module.css';
const formatDate = date =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({city}) {
  const {cityName, emoji, date, notes} = city;

  return (
    <div className={styles.cityItem}>
      <li>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}> &times;</button>
      </li>
    </div>
  );
}

export default CityItem;
