import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Funcionalidad } from '../funcionalidad/funcionalidad.entity';
import { Rol } from '../rol/rol.entity';

@Entity('rol_funcionalidad')
export class RolFuncionalidad extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  visible: string;

  @Column({ name: 'rol_id', nullable: false })
  rolId: number;

  @Column({ name: 'funcionalidad_id', nullable: false })
  funcionalidadId: number;

  //relaciones
  @ManyToOne(() => Rol, {
    cascade: true,
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @ManyToOne(() => Funcionalidad, {
    cascade: true,
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'funcionalidad_id' })
  funcionalidad: Funcionalidad;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
