import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateUser from '../middlewares/validateUser';

const router = Router();

const userController = new UserController();

router
  .route('/users')
  .post(validateUser, userController.create);

export default router;