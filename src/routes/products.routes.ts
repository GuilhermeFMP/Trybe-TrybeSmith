import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts';

const router = Router();

const productController = new ProductController();

router
  .route('/products')
  .get(productController.getAll)
  .post(validateProducts, productController.create);

export default router;