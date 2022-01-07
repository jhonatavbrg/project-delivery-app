import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function postLogin({ email, password }) {
  return axios.post('http://localhost:3001/login', {
    email,
    password,
  })
    .then(({ data }) => data.user)
    .catch((err) => err.toJSON());
}
