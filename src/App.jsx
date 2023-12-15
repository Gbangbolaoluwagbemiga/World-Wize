import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Product from './pages/Product';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Product />} />
//         <Route path="product" element={<Product />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
