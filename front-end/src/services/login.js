import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function postLogin({ email, password }) {
  return axios.post(`${process.env.API_URL}/login`, {
    email,
    password,
  }).then((response) => console.log(response));
}
