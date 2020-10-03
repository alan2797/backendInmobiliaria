import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleCaracteristicaController } from './inmueble-caracteristica.controller';

describe('InmuebleCaracteristicaController', () => {
  let controller: InmuebleCaracteristicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InmuebleCaracteristicaController],
    }).compile();

    controller = module.get<InmuebleCaracteristicaController>(InmuebleCaracteristicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
