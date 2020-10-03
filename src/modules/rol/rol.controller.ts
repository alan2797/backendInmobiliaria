import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
  Response,
  ResponseCode,
  ResponseMessage,
} from '../util/response/message.response';
import { Rol } from './rol.entity';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
  constructor(private readonly _rolService: RolService) {}

  @Get()
  async getRoles(@Res() res) {
    try {
      const roles = await this._rolService.getAll();
      return res
        .status(HttpStatus.OK)
        .json(new Response(ResponseMessage.OKEY, ResponseCode.OKEY, roles));
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
  async createRol(
    @Res() res,
    @Body('rol') rol: Rol,
    @Body('funcionalidades') funcionalidades: any,
  ) {
    try {
      await this._rolService.create(rol, funcionalidades);
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
