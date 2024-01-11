import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
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
      return state;
  }
}

function CitiesProvider({children}) {
  const [{cities, currentCity}, dispatch] = useReducer(reducer, initialState);

  const {Cities} = Data;

  useEffect(function () {
    dispatch({type: 'city/loaded', payload: Cities});
  }, []);

  const getCity = useCallback(
    function getCity(id) {
      const city = cities.find(el => el.id === id);
      dispatch({type: 'city/current', payload: city});
    },
    [cities]
  );

  function createCity(newCity) {
    dispatch({type: 'city/created', payload: newCity});
  }

  function deleteCity(id) {
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
