import React, { useState, useEffect } from 'react';
import NavBar from '../componets/header';
import CardsOrdersSeller from '../componets/cardsOrdersSeller';
import { getSales } from '../services/orders';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getAllSales = async () => {
      const allSales = await getSales();
      setSales(allSales);
    };
    getAllSales();
  }, []);

  return (
    <div>
      <NavBar />
      {sales.map((sale, index) => (
        <CardsOrdersSeller sale={ sale } key={ index } />
      ))}
    </div>
  );
}

export default SellerOrders;
