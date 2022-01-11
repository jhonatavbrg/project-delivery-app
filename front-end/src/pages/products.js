import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../componets/cards';
import NavBar from '../componets/header';
import getProducts from '../services/products';
import verifyToken from '../helpers/auth';
import CustomerContext from '../context/customerContext';

function Customer() {
  const navigate = useNavigate();
  const { totalPrice, cartProducts } = useContext(CustomerContext);

  const [products, setProducts] = useState([{
    name: '',
    price: 0,
    url_image: '',
    id: 0,
  }]);

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    if (verifyToken()) {
      getAllProducts();
    } else {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <div>
        {products.map((product, index) => (
          <Cards product={ product } key={ index } />
        ))}
      </div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ cartProducts.length === 0 }
        onClick={ () => navigate('/customer/checkout') }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          { `Ver carrinho: R$${totalPrice.toString().replace('.', ',')}` }
        </p>
      </button>
    </div>
  );
}

export default Customer;
