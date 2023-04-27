import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import validateOrder from '../middlewares/validateOrders';
import validateToken from '../middlewares/validateToken';

const router = Router();

const orderController = new OrderController();

router
  .route('/orders')
  .get(orderController.getAll)
  .post(validateToken, validateOrder, orderController.create);

export default router;