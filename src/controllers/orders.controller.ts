import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import OrderService from '../services/orders.service';

class OrderController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(statusCode.OK).json(orders);
  }
}

export default OrderController;