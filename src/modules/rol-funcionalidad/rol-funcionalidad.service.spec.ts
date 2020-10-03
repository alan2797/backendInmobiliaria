import { Test, TestingModule } from '@nestjs/testing';
import { RolFuncionalidadService } from './rol-funcionalidad.service';

describe('RolFuncionalidadService', () => {
  let service: RolFuncionalidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolFuncionalidadService],
    }).compile();

    service = module.get<RolFuncionalidadService>(RolFuncionalidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
