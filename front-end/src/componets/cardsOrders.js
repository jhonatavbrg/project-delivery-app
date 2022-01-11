import React from 'react';
import PropTypes from 'prop-types';

function CardsOrders({ sale }) {
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${sale.id}` }>
        pedido nº
        {' '}
        {sale.id}
      </p>
      <p data-testid={ `customer_orders__element-delivery-status-${sale.id}` }>
        {sale.status}
      </p>
      <p data-testid={ `customer_orders__element-order-date-${sale.id}` }> data </p>
      <p>
        {sale.total_price}
      </p>
    </div>
  );
}

CardsOrders.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    total_price: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};

export default CardsOrders;
