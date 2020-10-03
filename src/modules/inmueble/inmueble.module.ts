import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleController } from './inmueble.controller';
import { InmuebleRepository } from './inmueble.repository';
import { InmuebleService } from './inmueble.service';

@Module({
  imports: [TypeOrmModule.forFeature([InmuebleRepository])],
  controllers: [InmuebleController],
  providers: [InmuebleService],
})
export class InmuebleModule {}
