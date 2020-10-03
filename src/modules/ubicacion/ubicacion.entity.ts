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
import { Inmueble } from '../inmueble/inmueble.entity';
import { RolFuncionalidad } from '../rol-funcionalidad/rol-funcionalidad.entity';

@Entity('ubicacion')
export class Ubicacion extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  calle: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  numero: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  ciudad: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  latitud: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  longitud: string;

  //relaciones
  @OneToMany(
    () => Inmueble,
    inmueble => inmueble.ubicacion,
    { nullable: true, eager: false },
  )
  inmueble: Inmueble;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
