import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { BrandController } from './brand/brand.controller';
import { StoreController } from './store/store.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController,
    BrandController,
    StoreController,
  ],
  providers: [AppService],
})
export class AppModule {}
