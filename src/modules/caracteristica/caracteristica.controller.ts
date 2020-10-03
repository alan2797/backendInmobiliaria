import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Caracteristica } from './caracteristica.entity';
import { CaracteristicaService } from './caracteristica.service';

@Controller('caracteristica')
export class CaracteristicaController {
  constructor(private readonly _caracteristicaService: CaracteristicaService) {}
  @Get()
  async getCaracteristicas(@Res() res) {
    try {
      const caracteristicas = await this._caracteristicaService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(
            ResponseMessage.OKEY,
            ResponseCode.OKEY,
            caracteristicas,
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
  async createCaracteristica(
    @Res() res,
    @Body() caracteristica: Caracteristica,
  ) {
    try {
      await this._caracteristicaService.create(caracteristica);
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
