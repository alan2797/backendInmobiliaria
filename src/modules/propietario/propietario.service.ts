import { Injectable } from '@nestjs/common';
import { Propietario } from './propietario.entity';
import { PropietarioRepository } from './propietario.repository';

@Injectable()
export class PropietarioService {
  constructor(private readonly _propietarioRepository: PropietarioRepository) {}
  async getAll(): Promise<Propietario[]> {
    const propietarios: Propietario[] = await this._propietarioRepository.find({
      order: { id: 'DESC' },
    });

    return propietarios;
  }
  async create(propietario: Propietario): Promise<Propietario> {
    const save = await this._propietarioRepository.save(propietario);
    return save;
  }
}
