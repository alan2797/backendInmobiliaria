import { Repository, EntityRepository } from 'typeorm';
import { Compartir } from './compartir.entity';

@EntityRepository(Compartir)
export class CompartirRepository extends Repository<Compartir> {}
