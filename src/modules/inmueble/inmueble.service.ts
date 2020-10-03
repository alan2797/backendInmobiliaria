import { Injectable } from '@nestjs/common';
import { InmuebleCaracteristica } from '../inmueble-caracteristica/inmueble-caracteristica.entity';
import { Ubicacion } from '../ubicacion/ubicacion.entity';
import { Inmueble } from './inmueble.entity';
import { InmuebleRepository } from './inmueble.repository';

@Injectable()
export class InmuebleService {
  constructor(private readonly _inmuebleRepository: InmuebleRepository) {}

  async getAll(): Promise<Inmueble[]> {
    const inmuebles: Inmueble[] = await this._inmuebleRepository.find({
      order: { id: 'DESC' },
    });

    return inmuebles;
  }

  async create(
    inmueble: Inmueble,
    caracteristicas: any[],
    ubicacion: Ubicacion,
  ): Promise<Inmueble> {
    return await this._inmuebleRepository.manager.transaction(async manager => {
      const saveUbicacion = await manager.save(Ubicacion, ubicacion);
      inmueble.ubicacionId = saveUbicacion.id;
      const save = await manager.save(Inmueble, inmueble);
      for (let i = 0; i < caracteristicas.length; i++) {
        let item = caracteristicas[i];
        let newCaracteristica = new InmuebleCaracteristica();
        newCaracteristica.descripcion = item.descripcion;
        newCaracteristica.caracteristicaId = item.caracteristicaId;
        newCaracteristica.inmuebleId = save.id;
        await manager.save(InmuebleCaracteristica, newCaracteristica);
      }
      return save;
    });
  }
}
