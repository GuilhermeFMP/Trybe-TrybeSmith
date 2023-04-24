import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import LoginService from '../services/login.service';

class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.getUserLogin = this.getUserLogin.bind(this);
  }

  async getUserLogin(req: Request, res: Response): Promise<void | Response> {
    const login = req.body;
    const token = await this.loginService.getUserLogin(login);
    if (typeof token !== 'string') {
      return res.status(token.status).json({ message: token.message });
    }
    return res.status(statusCode.OK).json({ token });
  }
}

export default LoginController;