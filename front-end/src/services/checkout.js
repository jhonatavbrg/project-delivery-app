import axios from 'axios';

export default function postSale({ sales, seller, address }) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return axios.post('http://localhost:3001/orders/', {
      sales,
      seller,
      address,
    }, { headers: { authorization: user.token } })
      .then(({ data }) => data)
      .catch((err) => err);
  }
  return { message: 'Usuário não encontrado' };
}
