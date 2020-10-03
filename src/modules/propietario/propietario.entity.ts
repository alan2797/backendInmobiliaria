import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('propietario')
export class Propietario extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 35, nullable: false })
  apellido: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  ci: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  telefono: string;

  @Column({ type: 'varchar', nullable: false })
  correo: string;

  //relaciones
  /* @OneToOne(
      () => Usuario,
      usuario => usuario.propietario,
      { nullable: true, eager: false },
    )
    usuario: Usuario;*/

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
