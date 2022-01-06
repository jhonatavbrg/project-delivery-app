import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
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
        Fulano
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        sair
      </button>
    </div>
  );
}

export default NavBar;
