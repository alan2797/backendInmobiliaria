import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolController } from './rol.controller';
import { RolRepository } from './rol.repository';
import { RolService } from './rol.service';

@Module({
  imports: [TypeOrmModule.forFeature([RolRepository])],
  controllers: [RolController],
  providers: [RolService],
})
export class RolModule {}
