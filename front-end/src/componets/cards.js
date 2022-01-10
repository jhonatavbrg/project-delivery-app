import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CustomerContext from '../context/customerContext';
// import { getImages } from '../services/products';
import '../App.css';

function Cards({ product }) {
  const [productsContext] = useState(product);

  const changePrice = (price) => price.toString().replace('.', ',');
  const { products,
    setProducts,
    setTotalPrice } = useContext(CustomerContext);

  const [quantity, setQuantity] = useState(0);

  function updatedCartProducts() {

  }

  // function countTotalPrice() {
  //   const cartProduct = products.find(({ name }) => name !== productsContext.name);
  //   console.log(cartProduct);
  //   if (quantity > 0 && !cartProduct) {
  //     setProducts([{ ...productsContext, quantity }, ...products]);
  //   } else if (quantity > 0 && cartProduct.quantity !== quantity) {
  //     const updatedProducts = products.map((updatedProduct) => {
  //       if (updatedProduct.name === productsContext.name) {
  //         return { ...updatedProduct, quantity };
  //       }
  //       return updatedProduct;
  //     });
  //     setProducts(updatedProducts);
  //   } else if (quantity === 0) {
  //     const updatedProducts = products
  //       .filter((updatedProduct) => updatedProduct.name !== productsContext.name);
  //     setProducts(updatedProducts);
  //   }

  //   const total = products.reduce(
  //     (acc, { price }) => acc + (Number(price) * quantity), 0,
  //   );
  //   setTotalPrice(total);
  // }

  const add = () => {
    setQuantity(quantity + 1);
    countTotalPrice();
  };

  const remove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      countTotalPrice();
    }
  };

  const handleChange = ({ target }) => setQuantity(target.value);

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
        onClick={ add }
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
        onClick={ remove }
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
