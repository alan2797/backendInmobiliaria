import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoController } from './contrato.controller';
import { ContratoRepository } from './contrato.repository';
import { ContratoService } from './contrato.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContratoRepository])],
  controllers: [ContratoController],
  providers: [ContratoService],
})
export class ContratoModule {}
