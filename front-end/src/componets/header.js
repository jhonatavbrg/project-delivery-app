import React from 'react';

function NavBar() {
  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </button>
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
