import { Repository, EntityRepository } from 'typeorm';
import { Inmueble } from './inmueble.entity';

@EntityRepository(Inmueble)
export class InmuebleRepository extends Repository<Inmueble> {}
