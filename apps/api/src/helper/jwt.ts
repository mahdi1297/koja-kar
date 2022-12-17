import * as jwt from 'jsonwebtoken';
import { environment } from '../environments/environment';

export function signToken(payload) {
  const token = jwt.sign({ payload }, environment.REFRESH_TOKEN_SECRET, {
    algorithm: 'HS256',
    // expiresIn: environment.REFRESH_TOKEN_LIFE,
  });

  return token;
}
