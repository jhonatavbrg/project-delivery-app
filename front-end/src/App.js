import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
