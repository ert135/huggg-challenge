import { Test } from '@nestjs/testing';
import { BrandsController } from './brands.controller';

describe('Brands Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BrandsController],
    }).compile();

    controller = module.get(BrandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
