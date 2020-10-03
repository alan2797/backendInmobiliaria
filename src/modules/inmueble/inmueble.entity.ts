import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { InmuebleCaracteristica } from '../inmueble-caracteristica/inmueble-caracteristica.entity';
import { Propietario } from '../propietario/propietario.entity';
import { RolFuncionalidad } from '../rol-funcionalidad/rol-funcionalidad.entity';
import { Ubicacion } from '../ubicacion/ubicacion.entity';

@Entity('inmueble')
export class Inmueble extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  tipo: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  operacion: string;

  @Column({ type: 'float', nullable: false })
  precio: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  moneda: string;

  @Column({ name: 'ubicacion_id', nullable: false })
  ubicacionId: number;

  @Column({ name: 'propietario_id', nullable: false })
  propietarioId: number;

  //relaciones
  @OneToMany(
    () => InmuebleCaracteristica,
    inmuebleCaracteristica => inmuebleCaracteristica.inmueble,
    { nullable: true, eager: true },
  )
  inmuebleCaracteristica: InmuebleCaracteristica;

  @OneToOne(() => Ubicacion, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'ubicacion_id' })
  ubicacion: Ubicacion;

  @ManyToOne(() => Propietario, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'propietario_id' })
  propietario: Propietario;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
