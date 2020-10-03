import { Test, TestingModule } from '@nestjs/testing';
import { RolFuncionalidadController } from './rol-funcionalidad.controller';

describe('RolFuncionalidadController', () => {
  let controller: RolFuncionalidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolFuncionalidadController],
    }).compile();

    controller = module.get<RolFuncionalidadController>(RolFuncionalidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
