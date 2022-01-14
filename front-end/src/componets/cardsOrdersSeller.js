import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardsOrdersSeller({ sale }) {
  function convertDate(dateConvert) {
    const two = -2;
    const date = new Date(dateConvert);
    const getMonth = date.getMonth() + 1;
    const year = date.getFullYear();
    const month = `0${getMonth}`.slice(two);
    const day = date.getDate();
    return `${day}/${month}/${year}`;
  }
  return (
    <div>
      <Link to={ `/seller/orders/${sale.id}` }>
        <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>
          pedido nº
          {' '}
          {sale.id}
        </p>
        <p data-testid={ `seller_orders__element-delivery-status-${sale.id}` }>
          {sale.status}
        </p>
        <p data-testid={ `seller_orders__element-order-date-${sale.id}` }>
          {convertDate(sale.sale_date)}
        </p>
        <p data-testid={ `seller_orders__element-card-price-${sale.id}` }>
          {sale.total_price.replace('.', ',')}
        </p>
        <p data-testid={ `seller_orders__element-card-address-${sale.id}` }>
          {`${sale.delivery_address} ${sale.delivey_number}`}
        </p>
      </Link>
    </div>
  );
}

CardsOrdersSeller.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    total_price: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
    delivery_address: PropTypes.string,
    delivey_number: PropTypes.string,
  }).isRequired,
};

export default CardsOrdersSeller;
