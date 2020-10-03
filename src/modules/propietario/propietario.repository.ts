import { Repository, EntityRepository } from 'typeorm';
import { Propietario } from './propietario.entity';

@EntityRepository(Propietario)
export class PropietarioRepository extends Repository<Propietario> {}
