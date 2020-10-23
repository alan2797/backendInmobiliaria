import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('cliente')
export class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  idcliente: number;

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

  @Column({ type: 'varchar', length: 35, nullable: false })
  correo: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
