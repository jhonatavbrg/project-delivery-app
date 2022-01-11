import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));

export default function postSale({ sales, seller, address }) {
  if (user) {
    return axios.post('http://localhost:3001/orders/', {
      sales,
      seller,
      address,
    }, { headers: { authorization: user.token } })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }

  return { message: 'jwt malformed' };
}
