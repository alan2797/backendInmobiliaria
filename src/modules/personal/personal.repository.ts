import { Repository, EntityRepository } from 'typeorm';
import { Personal } from './personal.entity';

@EntityRepository(Personal)
export class PersonalRepository extends Repository<Personal> {}
