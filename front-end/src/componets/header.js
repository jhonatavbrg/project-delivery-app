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

  const redirectRole = () => {
    const userRole = getLSToken().role;
    if (userRole === 'seller') {
      navigate('/selller/orders', { replace: true });
    } else {
      navigate('/customer/orders', { replace: true });
    }
  };

  return (
    <div className="header">
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => redirectRole() }
      >
        Meus pedidos
      </button>
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
