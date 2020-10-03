import { Repository, EntityRepository } from 'typeorm';
import { Caracteristica } from './caracteristica.entity';

@EntityRepository(Caracteristica)
export class CaracteristicaRepository extends Repository<Caracteristica> {}
