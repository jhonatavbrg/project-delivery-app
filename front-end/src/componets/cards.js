import React from 'react';
import PropTypes from 'prop-types';

function Cards({ product }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={ product.url_image } alt={ product.name } />
      <button type="button">add</button>
      <input type="number" />
      <button type="button">remove</button>
    </div>
  );
}

export default Cards;
