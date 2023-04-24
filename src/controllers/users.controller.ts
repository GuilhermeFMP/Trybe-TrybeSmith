import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import UserService from '../services/users.service';

class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    res.status(statusCode.CREATED).json(userCreated);
  }
}

export default UserController;