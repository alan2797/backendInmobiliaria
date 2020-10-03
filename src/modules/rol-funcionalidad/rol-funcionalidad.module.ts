import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolFuncionalidadController } from './rol-funcionalidad.controller';
import { RolFuncionalidadRepository } from './rol-funcionalidad.repository';
import { RolFuncionalidadService } from './rol-funcionalidad.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolFuncionalidadRepository])],
  controllers: [RolFuncionalidadController],
  providers: [RolFuncionalidadService],
})
export class RolFuncionalidadModule {}
