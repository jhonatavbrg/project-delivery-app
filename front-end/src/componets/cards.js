import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CustomerContext from '../context/customerContext';
import '../App.css';

function Cards({ product }) {
  const changePrice = (price) => price.toString().replace('.', ',');
  const { cartProducts, setCartProducts } = useContext(CustomerContext);

  const [quantity, setQuantity] = useState(0);

  function updatedCartProducts(cartQuantity) {
    const cartProduct = cartProducts.find(({ name }) => name === product.name);
    if (!cartProduct) {
      setCartProducts([...cartProducts, { ...product, quantity: cartQuantity }]);
    } else {
      const updatedProducts = cartProducts.map((updatedProduct) => {
        if (updatedProduct.name === product.name) {
          return { ...updatedProduct, quantity: cartQuantity };
        }
        return updatedProduct;
      });
      setCartProducts(updatedProducts);
    }
  }

  function removeCartProduct() {
    const updatedProducts = cartProducts.filter(({ name }) => name !== product.name);
    setCartProducts(updatedProducts);
  }

  const addQuantity = () => {
    setQuantity(quantity + 1);
    updatedCartProducts(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (quantity - 1 === 0) {
        removeCartProduct();
      } else {
        updatedCartProducts(quantity - 1);
      }
    }
  };

  const handleChange = ({ target }) => {
    setQuantity(target.value);
    if (target.value === 0) {
      removeCartProduct();
    } else {
      updatedCartProducts(target.value);
    }
  };

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </p>
      <p data-testid={ `customer_products__element-card-price-${product.id}` }>
        {changePrice(product.price)}
      </p>
      <div className="img-cards">
        <img
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          src={ product.url_image }
          alt={ product.name }
        />
      </div>
      <button
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        type="button"
        onClick={ addQuantity }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        type="number"
        min={ 0 }
        onChange={ handleChange }
        value={ quantity }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        type="button"
        onClick={ removeQuantity }
      >
        -
      </button>
    </div>
  );
}

Cards.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Cards;
