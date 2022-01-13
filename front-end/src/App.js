import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Checkout from './pages/checkout';
import Customer from './pages/products';
import Orders from './pages/orders';
import OrderDetails from './pages/orderDetails';
import Admin from './pages/admin';
// import SellerOrders from './pages/sellerOrders';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Customer /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders" element={ <Orders /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </div>
  );
}

export default App;
