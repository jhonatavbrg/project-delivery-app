import React, { useState, useEffect } from 'react';
import HeaderSeller from '../componets/headerSeller';
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
      <HeaderSeller />
      {sales.map((sale, index) => (
        <CardsOrdersSeller sale={ sale } key={ index } />
      ))}
    </div>
  );
}

export default SellerOrders;
