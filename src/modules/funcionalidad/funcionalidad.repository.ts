import { Repository, EntityRepository } from 'typeorm';
import { Funcionalidad } from './funcionalidad.entity';

@EntityRepository(Funcionalidad)
export class FuncionalidadRepository extends Repository<Funcionalidad> {}
