import { Test, TestingModule } from '@nestjs/testing';
import { CompartirService } from './compartir.service';

describe('CompartirService', () => {
  let service: CompartirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompartirService],
    }).compile();

    service = module.get<CompartirService>(CompartirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
