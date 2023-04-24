import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import ProductService from '../services/products.service';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.create((product));
    res.status(statusCode.CREATED).json(productCreated);
  }
}

export default ProductController;