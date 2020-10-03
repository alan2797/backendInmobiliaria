import { Injectable } from '@nestjs/common';
import { RolFuncionalidad } from '../rol-funcionalidad/rol-funcionalidad.entity';
import { Rol } from './rol.entity';
import { RolRepository } from './rol.repository';

@Injectable()
export class RolService {
  constructor(private readonly _rolRepository: RolRepository) {}
  async getAll(): Promise<Rol[]> {
    const roles: Rol[] = await this._rolRepository.find({
      order: { id: 'DESC' },
    });

    return roles;
  }

  async create(rol: Rol, funcionalidades: any[]): Promise<Rol> {
    return await this._rolRepository.manager.transaction(async manager => {
      console.log(rol);
      console.log(funcionalidades);
      const saveRol = await manager.save(Rol, rol);
      for (let i = 0; i < funcionalidades.length; i++) {
        let item = funcionalidades[i];
        if (typeof item.visible === 'undefined') {
          item.visible = false;
        }
        let newRolFuncionalidad = new RolFuncionalidad();
        newRolFuncionalidad.visible = item.visible;
        newRolFuncionalidad.rolId = saveRol.id;
        newRolFuncionalidad.funcionalidadId = item.id;
        await manager.save(RolFuncionalidad, newRolFuncionalidad);
      }
      return saveRol;
    });
  }
}
