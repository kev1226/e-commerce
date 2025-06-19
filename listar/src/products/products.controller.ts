import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('listar')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
