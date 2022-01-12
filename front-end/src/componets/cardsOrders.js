import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardsOrders({ sale }) {
  console.log(sale);
  return (
    <div>
      <Link to={ `/customer/orders/${sale.id}` }>
        <p data-testid={ `customer_orders__element-order-id-${sale.id}` }>
          pedido nº
          {' '}
          {sale.id}
        </p>
        <p data-testid={ `customer_orders__element-delivery-status-${sale.id}` }>
          {sale.status}
        </p>
        <p data-testid={ `customer_orders__element-order-date-${sale.id}` }>
          {sale.sale_date}
        </p>
        <p data-testid={ `customer_orders__element-card-price-${sale.id}` }>
          {sale.total_price}
        </p>
      </Link>
    </div>
  );
}

CardsOrders.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    total_price: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
  }).isRequired,
};

export default CardsOrders;
