import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function postRegister({ email, password, name, role = 'ustomer' }) {
  return axios.post(`${process.env.REACT_APP_API_URL}/register`, {
    email,
    password,
    name,
    role,
  })
    .then(({ data }) => data.message)
    .catch((err) => err.toJSON());
}
