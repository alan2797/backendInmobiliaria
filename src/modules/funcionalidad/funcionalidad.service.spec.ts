import { Test, TestingModule } from '@nestjs/testing';
import { FuncionalidadService } from './funcionalidad.service';

describe('FuncionalidadService', () => {
  let service: FuncionalidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuncionalidadService],
    }).compile();

    service = module.get<FuncionalidadService>(FuncionalidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
