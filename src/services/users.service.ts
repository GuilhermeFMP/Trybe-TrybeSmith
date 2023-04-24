import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';
import Token from '../utils/token';

class UserService {
  model: UserModel;

  jwt: Token;

  constructor() {
    this.model = new UserModel(connection);
    this.jwt = new Token();
  }

  async create(user: User): Promise<object> {
    const id = await this.model.create(user);
    const token = this.jwt.generateToken({ id, ...user });
    return { token };
  }
}

export default UserService;