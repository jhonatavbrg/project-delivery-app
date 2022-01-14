import jwt from 'jsonwebtoken';
import { getLSToken } from './LS';

const SECRET_KEY = 'secret_key';

export default function verifyToken(roleToVerify) {
  const user = getLSToken();
  let decoded;
  try {
    decoded = jwt.verify(user.token, SECRET_KEY);
  } catch (e) {
    decoded = undefined;
  }
  if (typeof decoded !== 'undefined'
    && decoded.name === user.name
    && decoded.role === user.role
  ) {
    if (roleToVerify) {
      return decoded.role === roleToVerify;
    }
    return true;
  }
  return false;
}
