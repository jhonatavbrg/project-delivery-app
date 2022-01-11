import dotenv from 'dotenv';
import axios from 'axios';
import '../App.css';

dotenv.config();

export async function getSales() {
  return axios.get('http://localhost:3001/sales')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}

export async function getSalesById(id) {
  return axios.get(`http://localhost:3001/sales/${id}`)
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}

export default {
  getSales,
  getSalesById,
};
