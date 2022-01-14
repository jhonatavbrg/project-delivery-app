import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socketClient from 'socket.io-client';
import { getSalesById, changeStatusDB } from '../services/orders';
import NavBar from '../componets/headerSeller';

function SellerOrderDetails() {
  // fazer função para trazer o pedido de acordo com a venda
  // const curstomerTestIds = 'customer_order_details__element-order-';
  const { id } = useParams();
  const socket = socketClient('http://localhost:3002');
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
  const [buttonStatus, setButtonStatus] = useState();

  useEffect(() => {
    const getSaleDetail = async () => {
      const sale = await getSalesById(id);
      switch (sale.status) {
      case 'Pendente':
        setButtonStatus(0);
        break;
      case 'Preparando':
        setButtonStatus(1);
        break;
      default:
        setButtonStatus(2);
        break;
      }
      setSaleDetail(sale);
    };

    getSaleDetail();
    socket.on('updateStatus', () => {
      getSaleDetail();
    });
    return () => socket.disconnect();
  }, [setSaleDetail, id, socket]);

  function convertDate(dateConvert) {
    const two = -2;
    const date = new Date(dateConvert);
    const getMonth = date.getMonth() + 1;
    const year = date.getFullYear();
    const month = `0${getMonth}`.slice(two);
    const day = date.getDate();
    return `${day}/${month}/${year}`;
  }
  const changeStatus = async ({ target }) => {
    const status = target.name;
    await changeStatusDB(status, saleDetail.id);
    console.log(target);
    setButtonStatus(buttonStatus + 1);
    socket.emit('updateStatus', { status, saleId: saleDetail.id });
  };

  return (
    <div>
      <NavBar />
      <h3>Detalhes do Produto</h3>
      <div>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          Número do Pedido
          {saleDetail.id}
        </p>
        <p data-testid="seller_order_details__element-order-details-label-order-date">
          {convertDate(saleDetail.sale_date)}
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {saleDetail.status}
        </p>
        <button
          name="Preparando"
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ buttonStatus !== 0 }
          onClick={ (e) => changeStatus(e) }

        >
          Preparar Pedido
        </button>
        <button
          name="Em Trânsito"
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ buttonStatus !== 1 }
          onClick={ (e) => changeStatus(e) }
        >
          Saiu para a entrega
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
            <td
              data-testid={
                `seller_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${index}`
              }
            >
              {product.productName}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-quantity-${index}`
              }
            >
              {product.quantity}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-unit-price-${index}`
              }
            >
              {product.productPrice.replace('.', ',')}
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-sub-total-${index}`
              }
            >
              {
                (Number(product.productPrice) * product.quantity)
                  .toFixed(2).toString().replace('.', ',')
              }
            </td>
          </tr>
        )) }
      </table>
      <h2 data-testid="seller_order_details__element-order-total-price">
        {saleDetail.total_price.toString().replace('.', ',')}
      </h2>
    </div>
  );
}

export default SellerOrderDetails;
