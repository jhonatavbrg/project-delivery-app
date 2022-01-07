import dotenv from 'dotenv';
import axios from 'axios';
import '../App.css';

dotenv.config();

export default function getProducts() {
  return axios.get('http://localhost:3001/customer/products')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}

// export function getImages(urlImage) {
//   return axios.get(urlImage)
//     .then(({ data }) => console.log(data))
//     .catch((err) => console.log(err));
// }

// export function getImages(url) {
//   return axios
//     .get(url, {
//       responseType: 'arraybuffer',

//     })
//     .then((response) => Buffer.from(response.data, 'binary').toString('base64'));
// }
