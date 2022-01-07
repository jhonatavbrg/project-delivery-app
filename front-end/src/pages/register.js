import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import postRegister from '../services/register';
import postLogin from '../services/login';
import { setLSToken } from '../helpers/LS';

// import '../App.css';

function Register() {
  const [validate, setValidate] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validationChange = () => {
      const MIN_CHAR_NAME = 12;
      const MIN_CHAR_PASSWORD = 6;
      const { error } = Joi.object({
        name: Joi.string().min(MIN_CHAR_NAME).required(),
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().min(MIN_CHAR_PASSWORD).required(),
        role: Joi.string(),
      }).validate(register);

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

  async function sendRegister() {
    const message = await postRegister(register);
    console.log(message);
    if (message === 'Usuário criado com sucesso!') {
      setRegisterError(false);
      const token = await postLogin(register);
      setLSToken(token);
      navigate('/customer/products', { replace: true });
    } else {
      setRegisterError(true);
    }
  }

  const htmlError = (
    <p data-testid="common_register__element-invalid_register">
      Mensagem de error
    </p>
  );

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
      <label htmlFor="password">
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
        onClick={ sendRegister }
        disabled={ validate }
      >
        Cadastrar
      </button>
      { registerError ? htmlError : '' }
    </div>
  );
}

export default Register;
