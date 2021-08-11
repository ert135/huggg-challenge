import { Bind, Controller, Get, Param } from '@nestjs/common';
import fetchData  from "../dataService";
import mapProduct from "../utils/mapProduct/mapProduct";
import findById from "../utils/findById/findById";
import extractItem from '../utils/extractItem/extractItem';

@Controller('product')
export class ProductController {
    @Get()
    findAll() {
      const response = fetchData();

      const found = response?.data.flatMap(mapProduct);

      return found.map(extractItem(response.embedded.products));
    }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
      const response = fetchData();

      return response?.data.find(findById(params.id))?.products.map(extractItem(response.embedded.products));
    }
}
