import React, { useEffect, useState } from 'react';
import Cards from '../componets/cards';
import NavBar from '../componets/header';
import getProducts from '../services/products';

function Customer() {
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
    getAllProducts();
  }, []);

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
