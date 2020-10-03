import { Repository, EntityRepository } from 'typeorm';
import { Ubicacion } from './ubicacion.entity';

@EntityRepository(Ubicacion)
export class UbicacionRepository extends Repository<Ubicacion> {}
