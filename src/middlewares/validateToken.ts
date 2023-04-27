import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestUser, Token } from '../interfaces/requestUser.interface';

async function validateToken(req: RequestUser, res: Response, next: NextFunction) {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const decoded = <Token> jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default validateToken;