import { Injectable } from '@nestjs/common';
import { Compartir } from './compartir.entity';
import { CompartirRepository } from './compartir.repository';

@Injectable()
export class CompartirService {
  constructor(private readonly _compartirRepository: CompartirRepository) {}
  async getAll(): Promise<Compartir[]> {
    const compartidas: Compartir[] = await this._compartirRepository.find({
      order: { idcompartir: 'DESC' },
    });

    return compartidas;
  }
  async create(compartir: Compartir): Promise<Compartir> {
    const save = await this._compartirRepository.save(compartir);
    return save;
  }
}
