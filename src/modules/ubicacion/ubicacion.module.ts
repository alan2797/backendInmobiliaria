import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionController } from './ubicacion.controller';
import { UbicacionRepository } from './ubicacion.repository';
import { UbicacionService } from './ubicacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([UbicacionRepository])],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}
