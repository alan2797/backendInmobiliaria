import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Usuario } from '../usuario/usuario.entity';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Personal } from './personal.entity';
import { PersonalService } from './personal.service';

@Controller('personal')
export class PersonalController {
  constructor(private readonly _personalService: PersonalService) {}
  @Get()
  async getPersonales(@Res() res) {
    try {
      const personales = await this._personalService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(ResponseMessage.OKEY, ResponseCode.OKEY, personales),
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

  @Get('sinAcceso')
  async getPersonalesSinAcceso(@Res() res) {
    try {
      const personales = await this._personalService.getAllSinUser();
      return res
        .status(HttpStatus.OK)
        .json(
          new Response(ResponseMessage.OKEY, ResponseCode.OKEY, personales),
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
  async createPersonal(
    @Res() res,
    @Body('personal') personal: Personal,
    @Body('usuario') usuario: Usuario,
    @Body('acceso_sistema') acceso: Boolean,
  ) {
    try {
      await this._personalService.create(personal, usuario, acceso);
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
