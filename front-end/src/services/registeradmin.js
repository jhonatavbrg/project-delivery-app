import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function postRegisteradmin(
  { email, password, name, role = 'administrator' },
) {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios.post('http://localhost:3001/register/registeradm', {
    email,
    password,
    name,
    role,
  }, { headers: { authorization: user.token } })
    .then(({ data }) => data)
    .catch((err) => console.log(err)/* .toJSON() */);
}
