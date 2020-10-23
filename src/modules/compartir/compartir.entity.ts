import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('compartir')
export class Compartir extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  idcompartir: number;

  @Column({ name: 'fecha_hora', type: 'timestamp', nullable: false })
  fechaHora: Date;

  @Column({ type: 'varchar', length: 40, nullable: false })
  receptor: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  tipo: string;

  @Column({ type: 'char', length: 1, nullable: false })
  estado: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
