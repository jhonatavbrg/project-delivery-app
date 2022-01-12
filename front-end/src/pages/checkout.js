import React, { useEffect, useState, useContext } from 'react';
import CustomerContext from '../context/customerContext';
import { getSellers } from '../helpers/LS';
import NavBar from '../componets/header';
import postSale from '../services/checkout';

function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [sellerSelected, setSellerSelected] = useState(1);
  const [address, setAddress] = useState({ address: '', number: 0 });
  // const [productsArray, setProductsArray] = useState([]);
  const { cartProducts, totalPrice, setCartProducts } = useContext(CustomerContext);

  useEffect(() => {
    getSellers()
      .then((response) => {
        setSellers(typeof response === 'string' ? [] : response);
        setSellerSelected(response[0].id);
      });
  }, []);

  const removeItem = (id) => {
    const newArray = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newArray);
    return null;
  };

  const finalizeSale = () => {
    console.log('finalizedSale');
    postSale({
      sales: cartProducts,
      seller: sellerSelected,
      address });
  };

  const getInformation = ({ target: { name, value } }) => {
    if (name === 'address') {
      return setAddress({ ...address, address: value });
    }

    return setAddress({ ...address, number: value });
  };

  return (
    <div>
      <NavBar />
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor unitário</td>
            <td>Sub-total</td>
            <td>Remover item</td>
          </tr>
        </thead>
        <tbody>
          { cartProducts
            .map(({ id, name, price, quantity }, count) => (
              <tr key={ id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${count}`
                  }
                >
                  { count + 1 }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${count}`
                  }
                >
                  { name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${count}`
                  }
                >
                  { quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${count}`
                  }
                >
                  { price.toString().replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${count}`
                  }
                >
                  { (price * quantity).toFixed(2).toString().replace('.', ',') }
                </td>
                <button
                  type="button"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${count}`
                  }
                  onClick={ () => removeItem(id) }
                >
                  Remover
                </button>
              </tr>
            )) }
        </tbody>
      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        { Number(totalPrice).toFixed(2).toString().replace('.', ',') }
      </p>
      <form>
        <p>Detalhes e Endereço para Entrega</p>
        <p>P. Vendedora responsável</p>
        <label
          htmlFor="select-seller"
        >
          <select
            type="select"
            name="select-seller"
            data-testid="customer_checkout__select-seller"
            id="select-seller"
            onChange={ ({ target: { value } }) => setSellerSelected(value) }
          >
            { sellers && sellers.map(({ id, name, email }) => (
              <option key={ email } id={ id } value={ id }>{ name }</option>
            ))}
            ;
          </select>
        </label>
        <p>Endereço</p>
        <label htmlFor="address">
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            id="address"
            name="address"
            onChange={ getInformation }
          />
        </label>
        <p>Número</p>
        <label htmlFor="number-address">
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            id="number-address"
            name="number-address"
            onChange={ getInformation }
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => finalizeSale() }
        >
          Finalizar pedido!
        </button>
      </form>
    </div>
  );
}

export default Checkout;
