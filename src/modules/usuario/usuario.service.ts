import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { funcionalidadesRolPermitido } from './utils/funcionalidades.rawsql';

@Injectable()
export class UsuarioService {
  constructor(private readonly _usuarioRepository: UsuarioRepository) {}
  async getAll(): Promise<Usuario[]> {
    const usuarios: Usuario[] = await this._usuarioRepository.find({
      order: { id: 'DESC' },
    });

    return usuarios;
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const saveUsuario = await this._usuarioRepository.save(usuario);
    return saveUsuario;
  }

  async loginUser(login: any): Promise<any> {
    const isUsuario = await this._usuarioRepository.findOne({
      where: { username: login.username, password: login.password },
    });
    if (isUsuario) {
      const funcionalidades = await funcionalidadesRolPermitido(
        getManager(),
        isUsuario,
      );
      console.log(funcionalidades);
      return {
        usuario: isUsuario,
        funcionalidades: funcionalidades,
      };
    }
    return null;
  }
}
