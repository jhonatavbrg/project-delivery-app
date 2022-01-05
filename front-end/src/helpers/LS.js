export function setLSToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}

export function getLSToken() {
  return JSON.parse(localStorage.getItem('token'));
}
