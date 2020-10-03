import { Injectable } from '@nestjs/common';
import { Ubicacion } from './ubicacion.entity';
import { UbicacionRepository } from './ubicacion.repository';

@Injectable()
export class UbicacionService {
  constructor(private readonly _ubicacionRepository: UbicacionRepository) {}
  async getAll(): Promise<Ubicacion[]> {
    const ubicaciones: Ubicacion[] = await this._ubicacionRepository.find({
      order: { id: 'DESC' },
    });

    return ubicaciones;
  }
  async create(ubicacion: Ubicacion): Promise<Ubicacion> {
    const save = await this._ubicacionRepository.save(ubicacion);
    return save;
  }
}
