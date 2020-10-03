import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Propietario } from './propietario.entity';
import { PropietarioService } from './propietario.service';

@Controller('propietario')
export class PropietarioController {
  constructor(private readonly _propietarioService: PropietarioService) {}
  @Get()
  async getPropietarios(@Res() res) {
    try {
      const propietarios = await this._propietarioService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(ResponseMessage.OKEY, ResponseCode.OKEY, propietarios),
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
  async createPropietario(@Res() res, @Body() propietario: Propietario) {
    try {
      await this._propietarioService.create(propietario);
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
