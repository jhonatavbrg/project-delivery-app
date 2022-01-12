import jwt from 'jsonwebtoken';
import { getLSToken } from './LS';

const SECRET_KEY = 'secret_key';

export default function verifyToken() {
  const user = getLSToken();
  let decoded;
  try {
    decoded = jwt.verify(user.token, SECRET_KEY);
  } catch (e) {
    decoded = undefined;
  }
  if (typeof decoded !== 'undefined'
    && decoded.name === user.name
    && decoded.role === user.role) {
    return true;
  }
  return false;
}
