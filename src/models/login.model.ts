import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getUserLogin(login: Login) {
    const { username, password } = login;
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    const [rows] = result;
    return (rows as RowDataPacket[])[0];
  }
}