import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropietarioController } from './propietario.controller';
import { PropietarioRepository } from './propietario.repository';
import { PropietarioService } from './propietario.service';

@Module({
  imports: [TypeOrmModule.forFeature([PropietarioRepository])],
  controllers: [PropietarioController],
  providers: [PropietarioService],
})
export class PropietarioModule {}
