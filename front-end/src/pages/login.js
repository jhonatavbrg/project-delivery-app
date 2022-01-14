import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import '../App.css';
import Joi from 'joi';
import verifyToken from '../helpers/auth';
import postLogin from '../services/login';
import { setLSToken } from '../helpers/LS';

function Login() {
  const [validate, setValidate] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [payload, setPayload] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function onChange({ target }) {
    const { name, value } = target;
    setPayload({ ...payload, [name]: value });
  }

  async function sendLogin() {
    const token = await postLogin(payload);
    if (token.message) {
      return setLoginError(true);
    }
    setLoginError(false);
    setLSToken(token);
    if (token.role === 'seller') {
      return navigate('/seller/orders', { replace: true });
    }
    navigate('/customer/products', { replace: true });
  }

  useEffect(() => {
    const validateLogin = () => {
      const minLength = 6;
      const { error } = Joi.object({ email: Joi.string()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(minLength) })
        .validate(payload);
      if (error) {
        setValidate(true);
      } else {
        setValidate(false);
      }
    };
    validateLogin();
  }, [payload]);

  useEffect(() => {
    if (verifyToken('seller')) {
      return navigate('/seller/orders', { replace: true });
    }
    if (verifyToken('customer')) {
      return navigate('/customer/products', { replace: true });
    }
    if (verifyToken('administrator')) {
      return navigate('/admin/manage', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="App">
      <form>
        <label htmlFor="input-email">
          <p>Login</p>
          <input
            name="email"
            onChange={ onChange }
            id="input-email"
            data-testid="common_login__input-email"
            type="email"
          />
        </label>
        <label htmlFor="input-password">
          <p>Senha</p>
          <input
            name="password"
            onChange={ onChange }
            id="input-password"
            data-testid="common_login__input-password"
            type="password"
          />
        </label>
        <button
          disabled={ validate }
          data-testid="common_login__button-login"
          type="button"
          onClick={ sendLogin }
        >
          Login
        </button>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
      {
        loginError
          ? <p data-testid="common_login__element-invalid-email">Erro!</p>
          : null
      }
    </div>
  );
}

export default Login;
