import { Router } from 'express';
import UserController from '../controllers/users.controller';

const router = Router();

const userController = new UserController();

router
  .route('/users')
  .post(userController.create);

export default router;