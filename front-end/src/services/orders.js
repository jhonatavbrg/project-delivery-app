import dotenv from 'dotenv';
import axios from 'axios';
import '../App.css';

dotenv.config();

export default function getSales() {
  return axios.get('http://localhost:3001/sales')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
