import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSalesById } from '../services/orders';
import NavBar from '../componets/header';

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
      products: [{ id: 0, productPrice: '0', quantity: 0 }],
      total_price: '0',
    },
  );

  useEffect(() => {
    const getSaleDetail = async () => {
      const sale = await getSalesById(id);
      console.log(sale);
      setSaleDetail(sale);
    };
    getSaleDetail();
  }, [setSaleDetail, id]);

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
      <NavBar />
      <h3>Detalhes do Produto</h3>
      <div>
        <p data-testid={ `${curstomerTestIds}details-label-order-id` }>
          Número do Pedido
          {saleDetail.id}
        </p>
        <p data-testid={ `${curstomerTestIds}details-label-seller-name` }>
          {saleDetail.sellerName}
        </p>
        <p data-testid={ `${curstomerTestIds}details-label-order-date` }>
          {convertDate(saleDetail.sale_date)}
        </p>
        <p data-testid={ `${curstomerTestIds}details-label-delivery-status` }>
          {saleDetail.status}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled
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
          <tr key={ product.productId }>
            <td data-testid={ `${curstomerTestIds}table-item-number-${index}` }>
              {index + 1}
            </td>
            <td data-testid={ `${curstomerTestIds}table-name-${index}` }>
              {product.productName}
            </td>
            <td
              data-testid={ `${curstomerTestIds}table-quantity-${index}` }
            >
              {product.quantity}
            </td>
            <td
              data-testid={ `${curstomerTestIds}table-sub-total-${index}` }
            >
              {product.productPrice.replace('.', ',')}
            </td>
            <td
              data-testid={ `${curstomerTestIds}total-price-${index}` }
            >
              {
                (Number(product.productPrice) * product.quantity)
                  .toFixed(2).toString().replace('.', ',')
              }
            </td>
          </tr>
        )) }
      </table>
      <h2 data-testid={ `${curstomerTestIds}total-price` }>
        {saleDetail.total_price.toString().replace('.', ',')}
      </h2>
    </div>
  );
}

export default OrderDetails;
