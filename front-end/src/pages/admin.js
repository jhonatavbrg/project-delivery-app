import React, { useState } from 'react';
import ListUsers from '../componets/listUsers';
import registerAdm from '../services/registeradmin';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      password,
      role,
    };

    await registerAdm(newUser);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <h2>Cadastrar novo usuario</h2>
        <label htmlFor="input-name">
          Nome
          <input
            name="input-name"
            onChange={ ({ target }) => setName(target.value) }
            type="text"
            data-testid="admin_manage__input-name"
            placeholder="Seu nome"
          />
        </label>
        Email
        <input
          onChange={ ({ target }) => setEmail(target.value) }
          type="email"
          data-testid="admin_manage__input-email"
        />
        Senha
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          type="password"
          data-testid="admin_manage__input-password"
        />
        <select
          data-testid="admin_manage__select-role"
          onChange={ ({ target }) => setRole(target.value) }
        >
          <option defaultValue value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
        </select>
        <button
          disabled={ false }
          type="submit"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>
        <span data-testid="admin_manage__element-invalid-register">
          Erro ao cadastrar.
        </span>
      </form>
      <ListUsers />
    </div>
  );
}
