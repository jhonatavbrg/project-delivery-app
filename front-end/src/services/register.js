import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function postRegister({ email, password, name, role = 'ustomer' }) {
  return axios.post('http://localhost:3001/register', {
    email,
    password,
    name,
    role,
  })
    .then(({ data }) => data.message)
    .catch((err) => err.toJSON());
}
