import { Injectable } from '@nestjs/common';
import { RolFuncionalidad } from './rol-funcionalidad.entity';
import { RolFuncionalidadRepository } from './rol-funcionalidad.repository';

@Injectable()
export class RolFuncionalidadService {
  constructor(
    private readonly _rolFuncionalidadrepository: RolFuncionalidadRepository,
  ) {}
  async getAll(): Promise<RolFuncionalidad[]> {
    const rolFuncionalidades: RolFuncionalidad[] = await this._rolFuncionalidadrepository.find(
      {
        order: { id: 'DESC' },
      },
    );

    return rolFuncionalidades;
  }

  async create(rolFuncionalidad: RolFuncionalidad): Promise<RolFuncionalidad> {
    const save = await this._rolFuncionalidadrepository.save(rolFuncionalidad);
    return save;
  }
}
