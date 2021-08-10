import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './brands/brands.controller';
import { ProductsController } from './products/products.controller';
import { StoresController } from './stores/stores.controller';

@Module({
  imports: [],
  controllers: [AppController, BrandsController, ProductsController, StoresController],
  providers: [AppService],
})
export class AppModule {}
