import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompartirController } from './compartir.controller';
import { CompartirRepository } from './compartir.repository';
import { CompartirService } from './compartir.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompartirRepository])],
  controllers: [CompartirController],
  providers: [CompartirService],
})
export class CompartirModule {}
