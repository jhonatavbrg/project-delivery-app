import dotenv from 'dotenv';
import axios from 'axios';
import '../App.css';

dotenv.config();

export default function getAllUsers() {
  return axios.get('http://localhost:3001/user/users')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
