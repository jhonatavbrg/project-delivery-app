import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Customer from './pages/customer';
import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Customer /> } />
      </Routes>
    </div>
  );
}

export default App;
