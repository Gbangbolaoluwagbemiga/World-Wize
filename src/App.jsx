import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import City from './components/City';
import CountryItem from './components/CountryItem';
import {useEffect, useState} from 'react';

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const data = setCities(prev => [...prev, data]);
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
          <Route path="cities" element={<City />} />
          <Route path="countries" element={<CountryItem />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
