import {useEffect, useState} from 'react';
import {useUrlPosition} from '../hooks/useUrlPosition';

import styles from './Form.module.css';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import ButtonBack from './ButtonBack';
import Message from './Message';

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
  const [emoji, setEmoji] = useState('');
  const [geoCodingError, setGeoCodingError] = useState('');

  useEffect(
    function () {
      async function fetchLocation() {
        try {
          setIsLoadingGeolocation(true);
          setGeoCodingError('');
          const res = await fetch(
            `${LOCATION_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          // Guard clause for Somewhere that doesn't exist
          if (!data.countryCode && !data.countryCity)
            throw new Error(
              `That doesn"t seem to be a city. Click somewhere please`
            );
          setCityName(data.city || data.locality || '');
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));

          // setIsLoadingGeolocation(false);
        } catch (error) {
          setGeoCodingError(error.message);
        } finally {
          setIsLoadingGeolocation(false);
        }
      }
      fetchLocation();
    },
    [lat, lng]
  );

  if (geoCodingError) return <Message />;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={e => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
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
