import { Request } from 'express';

interface Token {
  id: number,
  username: string,
  vocation?: string,
  level?: number,
  password?: string,
}

interface RequestUser extends Request {
  user?: Token,
}

export {
  RequestUser,
  Token,
};