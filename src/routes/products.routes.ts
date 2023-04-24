import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productController = new ProductController();

router
  .route('/products')
  .post(productController.create);

export default router;