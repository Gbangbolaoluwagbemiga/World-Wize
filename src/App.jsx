import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Product from './pages/Product';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
// import City from './components/City';
import CountryList from './components/CountryList';
import {Data} from '../data/cities';
import CityList from './components/CityList';

function App() {
  const [cities, setCities] = useState([]);

  const {Cities} = Data;
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    setCities(Cities);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<Product />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="appLayout" element={<AppLayout />}>
          <Route path="cities" element={<CityList cities={cities} />} />
          <Route path="countries" element={<CountryList cities={cities} />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
