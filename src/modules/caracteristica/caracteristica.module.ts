import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaracteristicaController } from './caracteristica.controller';
import { CaracteristicaRepository } from './caracteristica.repository';
import { CaracteristicaService } from './caracteristica.service';

@Module({
  imports: [TypeOrmModule.forFeature([CaracteristicaRepository])],
  controllers: [CaracteristicaController],
  providers: [CaracteristicaService],
})
export class CaracteristicaModule {}
