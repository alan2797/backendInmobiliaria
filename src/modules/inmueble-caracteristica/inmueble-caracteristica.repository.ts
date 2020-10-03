import { Repository, EntityRepository } from 'typeorm';
import { InmuebleCaracteristica } from './inmueble-caracteristica.entity';

@EntityRepository(InmuebleCaracteristica)
export class InmuebleCaracteristicaRepository extends Repository<
  InmuebleCaracteristica
> {}
