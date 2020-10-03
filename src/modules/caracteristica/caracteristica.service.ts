import { Injectable } from '@nestjs/common';
import { Caracteristica } from './caracteristica.entity';
import { CaracteristicaRepository } from './caracteristica.repository';

@Injectable()
export class CaracteristicaService {
  constructor(
    private readonly _caracteristicaRepository: CaracteristicaRepository,
  ) {}
  async getAll(): Promise<Caracteristica[]> {
    const caracteristicas: Caracteristica[] = await this._caracteristicaRepository.find(
      {
        order: { id: 'DESC' },
      },
    );

    return caracteristicas;
  }

  async create(caracteristica: Caracteristica): Promise<Caracteristica> {
    const save = await this._caracteristicaRepository.save(caracteristica);

    return save;
  }
}
