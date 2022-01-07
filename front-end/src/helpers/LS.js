import axios from 'axios';

export function setLSToken(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getLSToken() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user;
  }
  return { };
}

export async function getSellers() {
  const result = await axios.get('http://localhost:3001/user/sellers');
  // .catch((error) => error);
  if (!result.data) return 'No sellers found';

  return result.data;
}
