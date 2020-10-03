import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { RolFuncionalidad } from '../rol-funcionalidad/rol-funcionalidad.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity('funcionalidad')
export class Funcionalidad extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', nullable: true })
  url: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  tipo: string;

  //relaciones
  @OneToMany(
    () => RolFuncionalidad,
    rolFuncionalidad => rolFuncionalidad.funcionalidad,
    { nullable: true, eager: false },
  )
  rolFuncionalidad: RolFuncionalidad;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
