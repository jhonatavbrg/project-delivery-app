export default function deleteUser() {
  return axios.delete('http://localhost:3001/user/users')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
}
