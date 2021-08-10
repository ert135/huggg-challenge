import { Test } from '@nestjs/testing';
import { StoresController } from './stores.controller';

describe('Stores Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [StoresController],
    }).compile();

    controller = module.get(StoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
