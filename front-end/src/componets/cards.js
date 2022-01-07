import React from 'react';
import PropTypes from 'prop-types';
// import { getImages } from '../services/products';
import '../App.css';

function Cards({ product }) {
  // const [images, setImages] = useState();

  // useEffect(() => {
  //   const getAlImages = async () => {
  //     const allImages = await getImages();
  //     setImages(allImages);
  //   };
  //   getAlImages();
  // }, []);

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </p>
      <p data-testid={ `customer_products__element-card-price-${product.id}` }>
        {product.price}
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
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        type="number"
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        type="button"
      >
        -
      </button>
    </div>
  );
}

Cards.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    url_image: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Cards;
