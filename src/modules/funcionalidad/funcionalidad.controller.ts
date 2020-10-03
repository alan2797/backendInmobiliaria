import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Funcionalidad } from './funcionalidad.entity';
import { FuncionalidadService } from './funcionalidad.service';

@Controller('funcionalidad')
export class FuncionalidadController {
  constructor(private readonly _funcionalidadService: FuncionalidadService) {}
  @Get()
  async getFuncionalidades(@Res() res) {
    try {
      const funcionalidades = await this._funcionalidadService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(
            ResponseMessage.OKEY,
            ResponseCode.OKEY,
            funcionalidades,
          ),
        );
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(
          new Response(
            error.message,
            ResponseCode.ERROR_SERVE,
            null,
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  }

  @Post('create')
  async createFuncionalidad(@Res() res, @Body() funcionalidad: Funcionalidad) {
    try {
      await this._funcionalidadService.create(funcionalidad);
      return res
        .status(HttpStatus.OK)
        .json(new Response(ResponseMessage.OKEY, ResponseCode.OKEY));
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(
          new Response(
            error.message,
            ResponseCode.ERROR_SERVE,
            null,
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  }
}
