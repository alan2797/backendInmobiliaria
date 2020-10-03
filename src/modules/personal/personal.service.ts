import { Injectable } from '@nestjs/common';
import { Usuario } from '../usuario/usuario.entity';
import { Personal } from './personal.entity';
import { PersonalRepository } from './personal.repository';
import { UsuarioRepository } from '../usuario/usuario.repository';

@Injectable()
export class PersonalService {
  constructor(
    private readonly _personalRepository: PersonalRepository,
    private readonly _usuarioRepository: UsuarioRepository,
  ) {}

  async getAll(): Promise<Personal[]> {
    const personales: Personal[] = await this._personalRepository.find({
      order: { id: 'DESC' },
    });

    return personales;
  }
  async getAllSinUser(): Promise<Personal[]> {
    const userQb = await this._usuarioRepository
      .createQueryBuilder('usuario')
      .select('usuario.personal_id');
    const personales = await this._personalRepository
      .createQueryBuilder('personal')
      .where('personal.id not in (' + userQb.getQuery() + ')')
      .setParameters(userQb.getParameters())
      .getMany();
    return personales;
  }

  async create(
    personal: Personal,
    usuario: Usuario,
    acceso: Boolean,
  ): Promise<Personal> {
    return await this._personalRepository.manager.transaction(async manager => {
      const savePersonal = await manager.save(Personal, personal);
      if (acceso) {
        var newUsuario = new Usuario();
        newUsuario = usuario;
        newUsuario.personalId = savePersonal.id;
        await manager.save(Usuario, newUsuario);
      }
      return savePersonal;
    });
  }
}
