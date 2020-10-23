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
import { Caracteristica } from '../caracteristica/caracteristica.entity';
import { Funcionalidad } from '../funcionalidad/funcionalidad.entity';
import { Inmueble } from '../inmueble/inmueble.entity';
import { Rol } from '../rol/rol.entity';

@Entity('inmubele_caracteristica')
export class InmuebleCaracteristica extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  descripcion: string;

  @Column({ name: 'caracteristica_id', nullable: false })
  caracteristicaId: number;

  @Column({ name: 'inmueble_id', nullable: false })
  inmuebleId: number;

  //relaciones
  @ManyToOne(() => Caracteristica, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'caracteristica_id' })
  caracteristica: Caracteristica;

  @ManyToOne(() => Inmueble, {
    cascade: true,
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'inmueble_id' })
  inmueble: Inmueble;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
