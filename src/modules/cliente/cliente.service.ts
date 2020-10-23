import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class ClienteService {
  constructor(private readonly _clienteRepository: ClienteRepository) {}

  async getAll(): Promise<Cliente[]> {
    const clientes: Cliente[] = await this._clienteRepository.find({
      order: { idcliente: 'DESC' },
    });

    return clientes;
  }
  async create(cliente: Cliente): Promise<Cliente> {
    const save = await this._clienteRepository.save(cliente);
    return save;
  }
}
