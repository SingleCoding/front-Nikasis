import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import UserInfo from './pages/UserInfo';
import '../style.css';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterAddress from './pages/RegisterAddress';
import Admin from './pages/Admin';
import Success from './pages/Success';

export default function () {
  const location = useLocation();
 
  return (
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/item/:id" element={<ProductDetails />} />
        <Route path="/buy/:id" element={<UserInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/address" element={<RegisterAddress />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={<Success />} />
      </Routes>
  );
}
