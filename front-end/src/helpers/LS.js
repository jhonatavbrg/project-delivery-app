import axios from 'axios';

export function setLSToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}

export function getLSToken() {
  return JSON.parse(localStorage.getItem('token'));
}

export async function getSellers() {
  const result = await axios.get('http://localhost:3001/user/sellers');
  // .catch((error) => error);
  if (!result.data) return 'No sellers found';

  return result.data;
}
