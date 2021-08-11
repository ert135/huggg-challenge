import { Bind, Controller, Get, Param } from '@nestjs/common';
import fetchData  from "../dataService";
import mapStore from "../utils/mapStore/mapStore";
import findById from "../utils/findById/findById";
import findByProductIdId from '../utils/findByProductId/findByProductId';
import extractStore from '../utils/extractStore/extractStore';

@Controller('store')
export class StoreController {
    @Get()
    findAll() {
        const response = fetchData();

        const storeIds = response.data.flatMap(mapStore);

        return storeIds?.map(extractStore(response.embedded.stores));
    }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
        const response = fetchData();

        const storeIds = response.data.find(findById(params.id))?.stores

        return storeIds?.map(extractStore(response.embedded.stores));
    }

    @Get('/byProductId/:id')
    @Bind(Param())
    findByProductId(params) {
        const response = fetchData();

        const storeIds = response.data.find(findByProductIdId(params.id))?.stores

        return storeIds?.map(extractStore(response.embedded.stores));
    }
}
