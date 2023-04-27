import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT o.id AS id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
      GROUP BY o.id;`,
    );
    const [rows] = result;
    return rows as Order[];
  }

  async create(order: { productsIds: number[] }, userId: number): Promise<void> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );
    const { insertId: id } = result;

    await Promise.all(order.productsIds.map(async (prod) => {
      await this.connection.execute(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
        [id, prod],
      );
    }));
  }
}