import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleCaracteristicaController } from './inmueble-caracteristica.controller';
import { InmuebleCaracteristicaRepository } from './inmueble-caracteristica.repository';
import { InmuebleCaracteristicaService } from './inmueble-caracteristica.service';

@Module({
  imports: [TypeOrmModule.forFeature([InmuebleCaracteristicaRepository])],
  controllers: [InmuebleCaracteristicaController],
  providers: [InmuebleCaracteristicaService],
})
export class InmuebleCaracteristicaModule {}
