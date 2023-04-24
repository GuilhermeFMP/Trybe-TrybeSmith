import { Request, Response, NextFunction } from 'express';
import schema from '../services/validations/schema';

async function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.user.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  next();
}

export default validateUser;