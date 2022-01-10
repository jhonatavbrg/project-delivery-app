import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cards from '../componets/cards';
import NavBar from '../componets/header';
import getProducts from '../services/products';
import verifyToken from '../helpers/auth';
import CustomerContext from '../context/customerContext';

function Customer() {
  const navigate = useNavigate();
  const { totalPrice, setTotalPrice, cartProducts } = useContext(CustomerContext);

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

  useEffect(() => {
    console.log(cartProducts);
    const total = cartProducts.reduce(
      (acc, { price, quantity }) => acc + (Number(price) * quantity), 0,
    );
    setTotalPrice(total.toFixed(2));
  }, [cartProducts, setTotalPrice]);

  return (
    <div>
      <NavBar />
      <div>
        {products.map((product, index) => (
          <Cards total={ totalPrice } product={ product } key={ index } />
        ))}
      </div>
      <Link to="/customer/checkout">{`Ver carrinho: R$${totalPrice}` }</Link>
    </div>
  );
}

export default Customer;
