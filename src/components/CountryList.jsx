import styles from './CountryList.module.css';
import CountryItem from './CountryItem';

function CountryList({cities}) {
  return (
    <ul className={styles.countryList}>
      {cities.map(country => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
