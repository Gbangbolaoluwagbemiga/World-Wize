import {useContext} from 'react';
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';

function CityList() {
  const {cities} = useContext();

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
