import { Test, TestingModule } from '@nestjs/testing';
import { CompartirController } from './compartir.controller';

describe('CompartirController', () => {
  let controller: CompartirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompartirController],
    }).compile();

    controller = module.get<CompartirController>(CompartirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
