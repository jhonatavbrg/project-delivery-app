import React from 'react';
// import { useState } from 'React';
import '../App.css';

function register() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <div className="App">
      <label htmlFor="name">
        Nome
        <input
          type="text"
          data-testid="common_register__input-name"
          id="name"
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="text"
          data-testid="common_register__input-email"
          id="email"
        />
      </label>
      <label
        htmlFor="password"
      >
        Senha
        <input
          type="password"
          data-testid="common_register__input-password"
          id="password"
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default register;
