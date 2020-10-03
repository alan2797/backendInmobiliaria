import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Inmueble } from './inmueble.entity';
import { InmuebleService } from './inmueble.service';

@Controller('inmueble')
export class InmuebleController {
  constructor(private readonly _inmuebleService: InmuebleService) {}
  @Get()
  async getInmuebles(@Res() res) {
    try {
      const inmuebles = await this._inmuebleService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(new Response(ResponseMessage.OKEY, ResponseCode.OKEY, inmuebles));
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
  async createInmuebles(
    @Res() res,
    @Body('inmueble') inmueble: Inmueble,
    @Body('caracteristicas') caracteristica: any,
    @Body('ubicacion') ubicacion: any,
  ) {
    try {
      await this._inmuebleService.create(inmueble, caracteristica, ubicacion);
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
