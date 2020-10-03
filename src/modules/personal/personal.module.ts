import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from '../usuario/usuario.repository';
import { PersonalController } from './personal.controller';
import { PersonalRepository } from './personal.repository';
import { PersonalService } from './personal.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalRepository, UsuarioRepository])],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class PersonalModule {}
