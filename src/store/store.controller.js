import { Bind, Controller, Get, Param } from '@nestjs/common';
import fetchData  from "../dataService";
import mapProduct from "../utils/mapProduct/mapProduct";
import findById from "../utils/findById/findById";

@Controller('store')
export class StoreController {
    @Get()
    findAll() {
      const brands = fetchData();

      return brands.flatMap(mapProduct);
    }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
        const brands = fetchData();

        return brands.find(findById(params.id))?.products
    }
}