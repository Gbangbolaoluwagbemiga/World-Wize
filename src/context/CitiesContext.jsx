import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import Data from '../data/cities';

const CitiesContext = createContext();

const initialState = {
  cities: [],
  currentCity: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'city/loaded':
      return {...state, cities: action.payload};

    case 'city/current':
      return {...state, currentCity: action.payload};

    case 'city/created':
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case 'city/deleted':
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };

    default:
      throw new Error(`Error`);
  }
}

function CitiesProvider({children}) {
  // const [cities, setCities] = useState([]);
  // const [currentCity, setCurrentCity] = useState('');

  const [{cities, currentCity}, dispatch] = useReducer(reducer, initialState);

  const {Cities} = Data;
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    // setCities(Cities);
    dispatch({type: 'city/loaded', payload: Cities});
  }, []);

  function getCity(id) {
    const city = cities.find(el => el.id === id);
    // setCurrentCity(city);
    dispatch({type: 'city/current', payload: city});
  }

  function createCity(newCity) {
    // setCities(prev => [...prev, newCity]);
    dispatch({type: 'city/created', payload: newCity});
  }

  function deleteCity(id) {
    // setCities(cities.filter(city => city.id !== id));
    dispatch({type: 'city/deleted', payload: id});
  }

  return (
    <CitiesContext.Provider
      value={{cities, getCity, deleteCity, currentCity, createCity}}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function UseCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider');

  return context;
}

export {CitiesProvider, UseCities};
