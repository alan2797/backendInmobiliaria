import { HttpStatus } from '@nestjs/common';
import { BaseEntity } from 'typeorm';

export class Response {
  statusCode: HttpStatus;
  response: ResponseCode;
  message: string | object;
  data?: any | any[] | object | object[];
  constructor(
    message: string | object | string[] | object[],
    response: ResponseCode = ResponseCode.OKEY,
    data?: any | any[] | object | object[] | BaseEntity | BaseEntity[],
    statusCode: HttpStatus = HttpStatus.OK,
  ) {
    this.statusCode = statusCode;
    this.response = response;
    this.message = message;
    data ? (this.data = data) : null;
  }
}

export enum ResponseMessage {
  OKEY = 'TODO CORRECTO',
  BAD_REQUEST = 'ENVIO DE DATOS INCOMPLETOS AL SERVIDOR',
  ERROR_SERVE = 'OCURRIO UN ERROR EN EL SERVIDOR',
  NOT_FOUND_DATA = 'NO SE ENCONTRARON DATOS',
}

export enum ResponseCode {
  OKEY = 1,
  BAD_REQUEST = -1,
  ERROR_SERVE = -2,
  NOT_FOUND_DATA = -3,
}

export enum server {
  SERVER = 'http://localhost:5000/api/medias/file/',
}
