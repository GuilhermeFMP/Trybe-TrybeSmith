import { Request, Response, NextFunction } from 'express';
import schema from '../services/validations/schema';

async function validateOrder(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.order.validate(req.body);
  if (error) {
    return res.status(error.message.includes('required') ? 400 : 422)
      .json({ message: error.message });
  }
  if (req.body.productsIds.length < 1) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}

export default validateOrder;