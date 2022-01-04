import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import login from './pages/login';
import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" component={ login } />
      </Routes>
    </div>
  );
}

export default App;
