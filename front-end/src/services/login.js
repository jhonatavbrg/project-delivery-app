import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function postLogin({ email, password }) {
  return axios.post(`${process.env.REACT_APP_API_URL}/login`, {
    email,
    password,
  })
    .then(({ data }) => data.token)
    .catch((err) => err.toJSON());
}
