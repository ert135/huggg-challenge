import { Bind, Controller, Get, Param } from '@nestjs/common';
import fetchData  from "../dataService";
import mapProduct from "../utils/mapProduct/mapProduct";
import findById from "../utils/findById/findById";

@Controller('product')
export class ProductController {
    @Get()
    findAll() {
      const brands = fetchData();

      return brands.data.flatMap(mapProduct);
    }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
        const brands = fetchData();

        return brands.data.find(findById(params.id))?.products
    }
}
