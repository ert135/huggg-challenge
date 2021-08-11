import { Test } from '@nestjs/testing';
import { BrandController } from './brand.controller';

const MOCK_BRAND = {
  id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24",
  created_at: "2019-03-18 13:09:22",
  updated_at: "2019-06-28 09:42:14",
  name: "Vue Cinemas",
  internal_name: "",
  logo: "arffae49101d293f3509c567549d7d2c91d52ca0cf.jpg",
  colour: "",
  success: "You top human, you. \nBig question is... who gets your next one?",
  share: "I'm using @huggg_uk to send my friends & family a little surprise pick me up! Download and send a huggg too @ api.huggg.me download",
  weight: 5000,
  deleted_at: null,
  expiry: 365,
  website: "https:  www.myvue.com ",
  integration_id: 4,
  user_id: "",
  email: null,
  vat: 20,
  faq: null,
  description: "",
  redeem: null,
  location_text: "the UK",
  map_pin_url: "https:cdn.huggg.melocationsard391c04c5c1eb6bd6a51a5c04fb13b9a4b460a8a.png",
  consolidated: 0,
  default_location_description_markdown: "",
  products: [
    "5a3fe6f7-7796-44ca-84fe-70d4f751527d"
  ],
  consolidated_products: [],
  stores: [
    "15af2cdc-f352-11e8-80cd-02e611b48058",
    "15af6de1-f352-11e8-80cd-02e611b48058"
  ],
  logo_url: "https:test.huggg.mebrandsarffae49101d293f3509c567549d7d2c91d52ca0cf.jpg"
}

jest.mock('../dataService', () => {
  return () => [
    MOCK_BRAND
  ];
});

describe('Brand Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BrandController],
    }).compile();

    controller = module.get(BrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get all brands', async () => {
      const result = controller.findAll();
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(MOCK_BRAND.id);
      expect(result[0].logo_url).toBe(MOCK_BRAND.logo_url);
      expect(result[0].name).toBe(MOCK_BRAND.name);
    });
  });

  describe('findOne', () => {
    it('should get a brand by ID', async () => {
      const result = controller.findOne({id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24"});

      expect(result).toEqual({
        id: MOCK_BRAND.id,
        logo_url: MOCK_BRAND.logo_url,
        name: MOCK_BRAND.name,
      });
    });

    it('returns undefined if no item is found', async () => {
      const result = controller.findOne({id: "_"});

      expect(result).toBe(undefined);
    });
  });
});
