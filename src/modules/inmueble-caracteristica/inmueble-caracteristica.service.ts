import { Injectable } from '@nestjs/common';
import { InmuebleCaracteristica } from './inmueble-caracteristica.entity';
import { InmuebleCaracteristicaRepository } from './inmueble-caracteristica.repository';

@Injectable()
export class InmuebleCaracteristicaService {
  constructor(
    private readonly _inmuebleCaracteristicaRepository: InmuebleCaracteristicaRepository,
  ) {}
  async getAll(): Promise<InmuebleCaracteristica[]> {
    const inmuebleCaracteristicas: InmuebleCaracteristica[] = await this._inmuebleCaracteristicaRepository.find(
      {
        order: { id: 'DESC' },
      },
    );

    return inmuebleCaracteristicas;
  }

  async create(
    inmuebleCaracteristica: InmuebleCaracteristica,
  ): Promise<InmuebleCaracteristica> {
    const save = await this._inmuebleCaracteristicaRepository.save(
      inmuebleCaracteristica,
    );
    return save;
  }
}
