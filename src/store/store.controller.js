import { Bind, Controller, Get, Param } from '@nestjs/common';
import fetchData  from "../dataService";
import mapStore from "../utils/mapStore/mapStore";
import findById from "../utils/findById/findById";
import findByProductId from '../utils/findByProductId/findByProductId';
import extractItem from '../utils/extractItem/extractItem';

@Controller('store')
export class StoreController {
    @Get()
    findAll() {
        const response = fetchData();

        const items = response.data.flatMap(mapStore)

        return items?.map(extractItem(response.embedded.stores));
    }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
        const response = fetchData();

        const foundStores = response.data.find(findById(params.id)).stores;

        return foundStores.map(extractItem(response.embedded.stores));
    }

    @Get('/byProductId/:id')
    @Bind(Param())
    findByProductId(params) {
        const response = fetchData();

        const matchingBrands = response.data.filter(findByProductId(params.id));

        return matchingBrands.flatMap(brand => brand.stores).map(extractItem(response.embedded.stores));
    }
}
