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

@Entity('rol')
export class Rol extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  descripcion: string;

  //relaciones
  @OneToMany(
    () => RolFuncionalidad,
    rolFuncionalidad => rolFuncionalidad.rol,
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
