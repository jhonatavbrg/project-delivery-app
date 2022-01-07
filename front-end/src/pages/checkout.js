import React, { useEffect, useState } from 'react';
import { getSellers } from '../helpers/LS';
import NavBar from '../componets/header';

function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState({ address: '', number: 0 });

  useEffect(() => {
    getSellers()
      .then((response) => setSellers(typeof response === 'string' ? [] : response));
  }, [sellers]);

  const getInformation = ({ target: { name, value } }) => {
    if (name === 'address') {
      return setAddress({ ...address, address: value });
    }

    return setAddress({ ...address, number: value });
  };

  return (
    <div>
      <NavBar />
      <p>Finalizar pedido</p>
      <ol>
        <li>
          <span>Item</span>
          <span>Descrição</span>
          <span>Quantidade</span>
          <span>Valor Unitário</span>
          <span>Sub-total</span>
          <span>Remover item</span>
        </li>
      </ol>
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
