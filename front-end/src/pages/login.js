import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function login() {
  return (
    <div className="App">
      <span className="logo">FOI!!!</span>
      <Link to="/register">
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}

export default login;
