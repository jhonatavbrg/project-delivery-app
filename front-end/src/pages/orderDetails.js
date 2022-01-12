import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSalesById } from '../services/orders';

function OrderDetails() {
  // fazer função para trazer o pedido de acordo com a venda
  const curstomerTestIds = 'customer_order_details__element-order-';
  const { id } = useParams();

  const [saleDetail, setSaleDetail] = useState(
    {
      id: 0,
      sellerName: '',
      sale_date: '',
      status: '',
      products: [{ id: 0 }],
    },
  );

  useEffect(() => {
    const getSaleDetail = async () => {
      const sale = await getSalesById(id);
      setSaleDetail(sale);
    };
    getSaleDetail();
  });

  return (
    <div>
      <h3>Detalhes do Produto</h3>
      <div>
        <p data-testid={ `${curstomerTestIds}details-label-order-id` }>
          Número do Pedido
          {saleDetail.id}
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
        { saleDetail.products.map((product, index) => (
          <tr key={ product.id }>
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
              { /* será a multiplicação da quantidade pelo valor do produto */ }
            </td>
            <td
              data-testid={ `${curstomerTestIds}total-price-${index}` }
            >
              Total
            </td>
          </tr>
        )) }
      </table>
      <h2 data-testid={ `${curstomerTestIds}total-price` }>
        Total Price
      </h2>
    </div>
  );
}

export default OrderDetails;
