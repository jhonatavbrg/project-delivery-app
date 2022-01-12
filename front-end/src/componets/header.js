import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLSToken } from '../helpers/LS';
// import '../App.css';

function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };
  const clientName = getLSToken().name;

  return (
    <div className="header">
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/orders/:id"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </Link>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"

      >
        {clientName}
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        sair
      </button>
    </div>
  );
}

export default NavBar;
