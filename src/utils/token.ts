import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secret: string = process.env.JWT_SECRET || 'secret';

export default class Token {
  jwt = jwt;

  generateToken(user: User) {
    return this.jwt.sign(user, secret, {
      algorithm: 'HS256' });
  }
}