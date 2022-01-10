import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomerContext from './customerContext';

export default function CustomerProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function saveCartProducts(products) {
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }

  function getCartProductsFromLS() {
    const products = localStorage.getItem('cartProducts');
    if (!products) {
      return [];
    }
    return JSON.parse(products);
  }

  useEffect(() => {
    saveCartProducts(cartProducts);
  }, [cartProducts]);

  const context = {
    cartProducts,
    setCartProducts,
    totalPrice,
    setTotalPrice,
    getCartProductsFromLS,
  };

  return (
    <CustomerContext.Provider value={ context }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
