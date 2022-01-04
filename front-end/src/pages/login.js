import React from 'react';
import '../App.css';

function login() {
  return (
    <div className="App">
      <form>
        <label htmlFor="input-email">
          <p>Login</p>
          <input
            id="input-email"
            data-testid="common_login__input-email"
            type="email"
          />
        </label>
        <label htmlFor="input-password">
          <p>Senha</p>
          <input
            id="input-password"
            data-testid="common_login__input-password"
            type="password"
          />
        </label>
        <button data-testid="common_login__button-login" type="button">
          Login
        </button>
        <button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </button>
      </form>
      <p data-testid="common_login__element-invalid-email">Erro!</p>
    </div>
  );
}

export default login;
