import {useEffect, useState} from 'react';

import styles from './Form.module.css';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import ButtonBack from './ButtonBack';
import {useUrlPosition} from '../hooks/useUrlPosition';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const LOCATION_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  useEffect(
    function () {
      async function fetchLocation() {
        try {
          setIsLoadingGeolocation(true);
          const res = await fetch(
            `${LOCATION_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);

          // setIsLoadingGeolocation(false);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoadingGeolocation(false);
        }
      }
      fetchLocation();
    },
    [lat, lng]
  );

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={e => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input id="date" onChange={e => setDate(e.target.value)} value={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={e => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          onclick={e => {
            e.preventDefault();
          }}
          type={'primary'}
        >
          Add
        </Button>

        <ButtonBack />
      </div>
    </form>
  );
}

export default Form;
