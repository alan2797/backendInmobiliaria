import { Injectable } from '@nestjs/common';
import { Funcionalidad } from './funcionalidad.entity';
import { FuncionalidadRepository } from './funcionalidad.repository';

@Injectable()
export class FuncionalidadService {
  constructor(
    private readonly _funcionalidadRepository: FuncionalidadRepository,
  ) {}
  async getAll(): Promise<Funcionalidad[]> {
    const funcionalidades: Funcionalidad[] = await this._funcionalidadRepository.find(
      {
        order: { id: 'DESC' },
      },
    );

    return funcionalidades;
  }

  async create(funcionalidad: Funcionalidad): Promise<Funcionalidad> {
    const save = await this._funcionalidadRepository.save(funcionalidad);
    return save;
  }
}
