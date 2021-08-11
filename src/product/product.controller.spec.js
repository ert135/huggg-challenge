import { Test } from '@nestjs/testing';
import { ProductController } from './product.controller';

const MOCK_BRAND = {
  id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24",
  products: [
    "5a3fe6f7-7796-44ca-84fe-70d4f751527d"
  ],
}

const MOCK_BRAND_2 = {
  id: "a715b837-f4fc-48ba-ba0a-7f53b6dc59c5",
  products: [
    "15af5bb6-f352-11e8-80cd-02e611b48058"
  ],
}

const MOCK_BRAND_3 = {
  id: "66ed94ca-64cd-4190-81f9-ef1e5d157b4e",
  products: [
    "15af5bb6-f352-11e8-80cd-02e611b48058"
  ],
}

jest.mock('../dataService', () => {
  return () => (
    {
      data: [
        MOCK_BRAND,
        MOCK_BRAND_2,
        MOCK_BRAND_3,
      ],
      embedded: {
        products: [
          {
            id: "5a3fe6f7-7796-44ca-84fe-70d4f751527d",
          },
          {
            id: "15af5bb6-f352-11e8-80cd-02e611b48058",
          },
          {
            id: "66ed94ca-64cd-4190-81f9-ef1e5d157b4e",
          },
        ]
      }
    }
  )
});

describe('Product Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProductController],
    }).compile();

    controller = module.get(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get all products', async () => {
      const result = controller.findAll();
      expect(result.length).toBe(3);
      expect(result).toEqual(
        [
          {
            id: MOCK_BRAND.products[0]
          },
          {
            id:  MOCK_BRAND_2.products[0]
          },
          {
            id:  MOCK_BRAND_3.products[0]
          },
        ]
      );
    });
  });

  describe('findOne', () => {
    it('should get products by brand ID', async () => {
      const result = controller.findOne({id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24"});

      expect(result).toEqual([{id: MOCK_BRAND.products[0]}]);
    });

    it('returns undefined if no item is found', async () => {
      const result = controller.findOne({id: "_"});

      expect(result).toBe(undefined);
    });
  });
});
