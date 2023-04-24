import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Login from '../interfaces/login.interface';
import Token from '../utils/token';

class LoginService {
  model: LoginModel;

  jwt: Token;

  constructor() {
    this.model = new LoginModel(connection);
    this.jwt = new Token();
  }

  async getUserLogin(login: Login): Promise<string | { message: string, status: number }> {
    const { username, password } = login;

    if (!username) return { status: 400, message: '"username" is required' };
    if (!password) return { status: 400, message: '"password" is required' };

    const row = await this.model.getUserLogin(login);

    if (!row) return { status: 401, message: 'Username or password invalid' };

    const { id, vocation, level } = row;
    const token = this.jwt.generateToken({ id, username, vocation, level });
    return token;
  }
}

export default LoginService;