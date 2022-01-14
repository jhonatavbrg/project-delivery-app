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
  const sellerName = getLSToken().name;

  return (
    <div className="header">
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Pedidos
      </Link>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {sellerName}
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        Sair
      </button>
    </div>
  );
}

export default NavBar;
