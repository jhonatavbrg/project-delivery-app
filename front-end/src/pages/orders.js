import React, { useEffect, useState } from 'react';
import NavBar from '../componets/header';
import CardsOrders from '../componets/cardsOrders';
import { getSales } from '../services/orders';

function Orders() {
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
        <CardsOrders sale={ sale } key={ index } />
      ))}
    </div>
  );
}

export default Orders;
