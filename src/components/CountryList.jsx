import styles from './CountryList.module.css';
import CountryItem from './CountryItem';

function CountryList({cities}) {
  const countries = cities.reduce((arr, countries) => {
    if (!arr.map(el => el.country).includes(countries.country))
      return [...arr, {country: countries.country, emoji: countries.emoji}];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
