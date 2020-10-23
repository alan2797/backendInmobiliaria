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
import { Cliente } from '../cliente/cliente.entity';
import { InmuebleCaracteristica } from '../inmueble-caracteristica/inmueble-caracteristica.entity';
import { Inmueble } from '../inmueble/inmueble.entity';
import { Personal } from '../personal/personal.entity';
import { Propietario } from '../propietario/propietario.entity';
import { RolFuncionalidad } from '../rol-funcionalidad/rol-funcionalidad.entity';
import { Ubicacion } from '../ubicacion/ubicacion.entity';

@Entity('contrato')
export class Contrato extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  idcontrato: number;

  @Column({ name: 'fecha_inicio', type: 'date', nullable: false })
  fechaInicio: Date;

  @Column({ name: 'fecha_final', type: 'date', nullable: false })
  fechaFinal: Date;

  @Column({ name: 'tipo_pago', type: 'varchar', length: 15, nullable: false })
  tipoPago: string;

  @Column({ name: 'tipo', type: 'varchar', length: 15, nullable: false })
  tipo: string;

  @Column({
    name: 'entrega_pago',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  entregaPago: string;

  @Column({
    name: 'address_contrato',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  addressContrato: string;

  @Column({ name: 'hash', type: 'varchar', length: 200, nullable: false })
  hash: string;

  @Column({ type: 'float', nullable: false })
  valor: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  moneda: string;

  @Column({ type: 'char', length: 8, nullable: false })
  estado: string;

  @Column({ name: 'personal_id', nullable: false })
  personalId: number;

  @Column({ name: 'inmueble_id', nullable: false })
  inmuebleId: number;

  @Column({ name: 'cliente_id', nullable: false })
  clienteId: number;
  //relaciones
  @ManyToOne(() => Personal, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @ManyToOne(() => Inmueble, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'inmueble_id' })
  inmueble: Inmueble;

  @ManyToOne(() => Cliente, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
