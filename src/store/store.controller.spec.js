import { Test } from '@nestjs/testing';
import { StoreController } from './store.controller';

const MOCK_BRAND = {
  id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24",
  products: [
    "123",
  ],
  stores: [
    "5a3fe6f7-7796-44ca-84fe-70d4f751527d"
  ],
}

const MOCK_BRAND_2 = {
  id: "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
  products: [
    "456"
  ],
  stores: [
    "15af5bb6-f352-11e8-80cd-02e611b48058"
  ],
}

jest.mock('../dataService', () => {
  return () => (
    {
      data: [
        MOCK_BRAND,
        MOCK_BRAND_2,
      ],
      embedded: {
        stores: [
          {
            id: "5a3fe6f7-7796-44ca-84fe-70d4f751527d"
          },
          {
            id: "15af5bb6-f352-11e8-80cd-02e611b48058"
          }
        ]
      }
    }
  )
});

describe('Store Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [StoreController],
    }).compile();

    controller = module.get(StoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get all stores', async () => {
      const result = controller.findAll();
      expect(result.length).toBe(2);
      expect(result).toEqual([{id: MOCK_BRAND.stores[0]}, { id: MOCK_BRAND_2.stores[0]}]);
    });
  });

  describe('findOne', () => {
    it('should get stores by brand ID', async () => {
      const result = controller.findOne({id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24"});

      expect(result).toEqual([{id: "5a3fe6f7-7796-44ca-84fe-70d4f751527d"}]);
    });

    it('returns undefined if no item is found', async () => {
      const result = controller.findOne({id: "_"});

      expect(result).toBe(undefined);
    });
  });

  describe('/byProductId/:id', () => {
    it('should get stores by a product ID', async () => {
      const result = controller.findByProductId({id: "123"});

      expect(result).toEqual([{id: MOCK_BRAND.stores[0]}]);
    });

    it('returns undefined if no item is found', async () => {
      const result = controller.findByProductId({id: "_"});

      expect(result).toBe(undefined);
    });
  });
});
