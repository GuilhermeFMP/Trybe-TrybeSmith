import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import OrderService from '../services/orders.service';
import { RequestUser } from '../interfaces/requestUser.interface';

class OrderController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(statusCode.OK).json(orders);
  }

  async create(req: RequestUser, res: Response) {
    if (req.user !== undefined) {
      await this.orderService.create(req.body, Number(req.user.id));
      return res.status(201).json({ userId: Number(req.user.id),
        productsIds: req.body.productsIds });
    }
  }
}

export default OrderController;