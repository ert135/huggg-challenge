import { Bind, Controller, Get, Param } from '@nestjs/common';
import fetchData  from "../dataService";
import mapBrand from "../utils/mapBrand/mapBrand";
import findById from "../utils/findById/findById";

@Controller('brand')
export class BrandController {
    @Get()
    findAll() {
      const brands = fetchData();

      return brands.data.map(mapBrand);
    }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
        const brands = fetchData();

        return brands.data.map(mapBrand).find(findById(params.id));
    }
}
