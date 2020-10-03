import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Ubicacion } from './ubicacion.entity';
import { UbicacionService } from './ubicacion.service';

@Controller('ubicacion')
export class UbicacionController {
  constructor(private readonly _ubicacionService: UbicacionService) {}
  @Get()
  async getUbicacion(@Res() res) {
    try {
      const ubicaciones = await this._ubicacionService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(ResponseMessage.OKEY, ResponseCode.OKEY, ubicaciones),
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
  async createUbicacion(@Res() res, @Body() ubicacion: Ubicacion) {
    try {
      await this._ubicacionService.create(ubicacion);
      return res
        .status(HttpStatus.OK)
        .json(new Response(ResponseMessage.OKEY, ResponseCode.OKEY));
    } catch (error) {
      console.log(error);
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
