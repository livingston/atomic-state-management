import { Routes, Route } from 'react-router-dom';

import Cart from '@aosm/cart/Cart';
import ProductListing from '@aosm/products/ProductListing';

import Header from './Header';
import Layout from './Layout';

const DebugControl = () => {
  const onChange = ({ target }) => {
    document.documentElement.classList.toggle('debug', target.checked);
  };

  return (
    <section className="fixed p-5 top-0 right-0">
      <label htmlFor="toogleA" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toogleA"
            type="checkbox"
            className="sr-only"
            onChange={onChange}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
      </label>
    </section>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ProductListing />} />
        </Route>
      </Routes>
      <DebugControl />
    </>
  );
}

export default App;
