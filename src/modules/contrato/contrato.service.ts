import { Injectable } from '@nestjs/common';
import { Contrato } from './contrato.entity';
import { ContratoRepository } from './contrato.repository';

@Injectable()
export class ContratoService {
  constructor(private readonly _contratoRepository: ContratoRepository) {}

  async getAll(): Promise<Contrato[]> {
    const contratos: Contrato[] = await this._contratoRepository.find({
      order: { idcontrato: 'DESC' },
    });

    return contratos;
  }
  async create(contrato: Contrato): Promise<Contrato> {
    const save = await this._contratoRepository.save(contrato);
    return save;
  }
}
