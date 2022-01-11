import React, { useEffect, useState } from 'react';
// import CustomerContext from '../context/customerContext';
import { getSellers } from '../helpers/LS';
import NavBar from '../componets/header';

function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState({ address: '', number: 0 });
  const [productsArray, setProductsArray] = useState([]);
  // const { getCartProductsFromLS } = useContext(CustomerContext);

  useEffect(() => {
    getSellers()
      .then((response) => setSellers(typeof response === 'string' ? [] : response));
  }, []);

  useEffect(() => {
    const productsCart = JSON.parse(localStorage.getItem('cartProducts'));
    setProductsArray(productsCart);
  }, []);

  const totalPriceProducts = () => {
    const totalAll = productsArray.reduce((acc, curr) => {
      acc += (curr.price * curr.quantity);
      return acc.toFixed(2);
    }, 0);

    return totalAll;
  };

  const removeItem = (name) => {
    delete productsArray[name];
    setProductsArray(productsArray);
    localStorage.setItem('cartProducts', JSON.stringify(productsArray));
    return null;
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
          { Object.values(productsArray
            .map(({ id, name, price, quantity }, count = 0) => (
              <tr key={ id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${count + 1}`
                  }
                >
                  { count + 1 }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${count + 1}`
                  }
                >
                  { name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${count + 1}`
                  }
                >
                  { quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${count + 1}`
                  }
                >
                  { price }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${count + 1}`
                  }
                >
                  { (price * quantity).toFixed(2) }
                </td>
                <button
                  type="button"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${count + 1}`
                  }
                  onClick={ removeItem(name) }
                >
                  Remover
                </button>
              </tr>
            ))) }
        </tbody>
      </table>
      <p>
        Total: R$
        { totalPriceProducts() }
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
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          // onClick="function"
        >
          Finalizar pedido!
        </button>
      </form>
    </div>
  );
}

export default Checkout;
