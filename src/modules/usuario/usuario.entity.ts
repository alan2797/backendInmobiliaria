import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Personal } from '../personal/personal.entity';
import { Rol } from '../rol/rol.entity';

@Entity('usuario')
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 35, nullable: false })
  password: string;

  @Column({ name: 'rol_id', nullable: false })
  rolId: number;

  @Column({ name: 'personal_id', nullable: false })
  personalId: number;
  ///relaciones
  @OneToOne(() => Personal, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @ManyToOne(() => Rol, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
