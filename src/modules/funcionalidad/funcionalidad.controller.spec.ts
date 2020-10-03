import { Test, TestingModule } from '@nestjs/testing';
import { FuncionalidadController } from './funcionalidad.controller';

describe('FuncionalidadController', () => {
  let controller: FuncionalidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionalidadController],
    }).compile();

    controller = module.get<FuncionalidadController>(FuncionalidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
