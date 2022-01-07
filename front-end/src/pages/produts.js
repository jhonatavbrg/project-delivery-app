import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../componets/cards';
import NavBar from '../componets/header';
import getProducts from '../services/products';
import verifyToken from '../helpers/auth';

function Customer() {
  const navigate = useNavigate();

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
    console.log(verifyToken());
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
    </div>
  );
}

export default Customer;
