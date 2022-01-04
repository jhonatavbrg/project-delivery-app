import React, { useState, useEffect } from 'react';
import Joi from 'joi';
import '../App.css';

function Register() {
  const [validate, setValidate] = useState(false);
  const [register, setRegister] = useState({ name: '', email: '', password: '' });
  useEffect(() => {
    const validationChange = () => {
      const MAX_CHAR_NAME = 12;
      const MIN_CHAR_PASSWORD = 6;
      const { error } = Joi.object({ name: Joi.string().max(MAX_CHAR_NAME).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().min(MIN_CHAR_PASSWORD).required() })
        .validate(register);

      if (error) {
        setValidate(true);
        console.log(error);
      } else {
        setValidate(false);
      }
    };

    validationChange();
  }, [register]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const htmlError = (
    <p data-testid="common_register__element-invalid_register">
      Mensagem de error
    </p>);

  return (
    <div className="App">
      <label htmlFor="name">
        Nome
        <input
          type="text"
          data-testid="common_register__input-name"
          name="name"
          onChange={ handleChange }
          id="name"
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="text"
          data-testid="common_register__input-email"
          name="email"
          onChange={ handleChange }
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
          name="password"
          onChange={ handleChange }
          id="password"
        />
      </label>
      <button
        type="button"
        data-testid="common_register__button-register"
        // onClick={ sendDataFromDb() }
        disabled={ validate }
      >
        Cadastrar
      </button>
      { validate ? htmlError : '' }
    </div>
  );
}

export default Register;
