import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Compartir } from './compartir.entity';
import { CompartirService } from './compartir.service';

@Controller('compartir')
export class CompartirController {
  constructor(private readonly _compartirService: CompartirService) {}
  @Get()
  async getCompartir(@Res() res) {
    try {
      const compartidas = await this._compartirService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(ResponseMessage.OKEY, ResponseCode.OKEY, compartidas),
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
  async createPropietario(@Res() res, @Body() compartir: Compartir) {
    try {
      await this._compartirService.create(compartir);
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
