import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Order from '../interfaces/order.interface';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;