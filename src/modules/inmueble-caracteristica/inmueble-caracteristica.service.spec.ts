import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleCaracteristicaService } from './inmueble-caracteristica.service';

describe('InmuebleCaracteristicaService', () => {
  let service: InmuebleCaracteristicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InmuebleCaracteristicaService],
    }).compile();

    service = module.get<InmuebleCaracteristicaService>(InmuebleCaracteristicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
