import { Repository, EntityRepository } from 'typeorm';
import { RolFuncionalidad } from './rol-funcionalidad.entity';

@EntityRepository(RolFuncionalidad)
export class RolFuncionalidadRepository extends Repository<RolFuncionalidad> {}
