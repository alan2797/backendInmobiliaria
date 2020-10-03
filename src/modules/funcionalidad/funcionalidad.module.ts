import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionalidadController } from './funcionalidad.controller';
import { FuncionalidadRepository } from './funcionalidad.repository';
import { FuncionalidadService } from './funcionalidad.service';

@Module({
  imports: [TypeOrmModule.forFeature([FuncionalidadRepository])],
  controllers: [FuncionalidadController],
  providers: [FuncionalidadService],
})
export class FuncionalidadModule {}
