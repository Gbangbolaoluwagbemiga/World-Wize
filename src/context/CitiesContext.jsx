import {createContext, useContext, useEffect, useState} from 'react';
import Data from '../data/cities';

const CitiesContext = createContext();

function CitiesProvider({children}) {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState('');

  const {Cities} = Data;
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    setCities(Cities);
  }, []);

  function getCity(id) {
    const city = cities.find(el => el.id === id);
    setCurrentCity(city);
  }

  function createCity(newCity) {
    setCities(prev => [...prev, newCity]);
  }

  return (
    <CitiesContext.Provider value={{cities, getCity, currentCity, createCity}}>
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
