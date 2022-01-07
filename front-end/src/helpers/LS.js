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
