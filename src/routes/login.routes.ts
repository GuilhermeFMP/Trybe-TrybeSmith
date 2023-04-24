import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const router = Router();

const loginController = new LoginController();

router
  .route('/login')
  .post(loginController.getUserLogin);

export default router;