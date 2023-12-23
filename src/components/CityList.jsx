import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';

function CityList({cities}) {
  if (!cities.length)
    return <Message message={`No cities added, Click the map to add a city`} />;
  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
