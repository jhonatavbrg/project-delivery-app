import React from 'react';
// import PropTypes from 'prop-types';

function OrderDetails() {
  const curstomerTestIds = 'customer_order_details__element-order-';
  return (
    <div>
      <h3>Detalhes do Produto</h3>
      <div>
        <p data-testid={ `${curstomerTestIds}details-label-order-id` }>
          Número do Pedido
        </p>
        <p data-testid={ `${curstomerTestIds}details-label-seller-name` }>
          Nome Vendedor
        </p>
        <p data-testid={ `${curstomerTestIds}details-label-order-date` }>
          Data do Pedido
        </p>
        <p data-testid={ `${curstomerTestIds}details-label-delivery-status` }>
          Status do Pedido
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
      </div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        { /* fazer map para distribuir as infos do produto */ }
        <tr>
          <td data-testid={ `${curstomerTestIds}table-item-number-${index}` }>
            item
          </td>
          <td data-testid={ `${curstomerTestIds}table-name-${index}` }>
            Nome do Produto
          </td>
          <td
            data-testid={ `${curstomerTestIds}table-quantity-${index}` }
          >
            Quantidade
          </td>
          <td
            data-testid={ `${curstomerTestIds}table-sub-total-${index}` }
          >
            Sub-total
          </td>
          <td
            data-testid={ `${curstomerTestIds}total-price-${index}` }
          >
            Total
          </td>
        </tr>
      </table>
      <h2 data-testid={ `${curstomerTestIds}total-price` }>
        Total Price
      </h2>
    </div>
  );
}

export default OrderDetails;
