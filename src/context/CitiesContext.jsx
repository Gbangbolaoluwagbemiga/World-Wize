import {createContext, useContext, useEffect, useState} from 'react';
import Data from '../data/cities';

const CitiesContext = createContext();

function CitiesProvider({children}) {
  const [cities, setCities] = useState([]);

  const {Cities} = Data;
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    setCities(Cities);
  }, []);

  return (
    <CitiesContext.Provider value={{cities: cities}}>
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
