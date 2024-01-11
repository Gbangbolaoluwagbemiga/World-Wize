import {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {CitiesProvider} from './context/CitiesContext';
import {AuthProvider} from './context/AuthContext';

const Homepage = lazy(import('./pages/Homepage'));
const Pricing = lazy(import('./pages/Pricing'));
const Product = lazy(import('./pages/Product'));
const Login = lazy(import('./pages/Login'));
const AppLayout = lazy(import('./pages/AppLayout'));

// dist/assets/index-58deac7a.css   35.50 kB │ gzip:   5.90 kB
// dist/assets/index-66d5062d.js   533.76 kB │ gzip: 151.19 kB

// import Product from './pages/Product';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import Pricing from './pages/Pricing';
// import AppLayout from './pages/AppLayout';

import City from './components/City';
import CountryList from './components/CountryList';
import CityList from './components/CityList';
import Form from './components/Form';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Suspense>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
              <Route path="product" element={<Product />} />
              <Route path="product" element={<Product />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="appLayout" element={<AppLayout />}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="pricing" element={<Pricing />} />
            </Suspense>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
