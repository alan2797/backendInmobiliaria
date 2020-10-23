import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './modules/personal/personal.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { RolModule } from './modules/rol/rol.module';
import { FuncionalidadModule } from './modules/funcionalidad/funcionalidad.module';
import { RolFuncionalidadModule } from './modules/rol-funcionalidad/rol-funcionalidad.module';
import { PropietarioModule } from './modules/propietario/propietario.module';
import { CaracteristicaModule } from './modules/caracteristica/caracteristica.module';
import { InmuebleCaracteristicaModule } from './modules/inmueble-caracteristica/inmueble-caracteristica.module';
import { InmuebleModule } from './modules/inmueble/inmueble.module';
import { UbicacionModule } from './modules/ubicacion/ubicacion.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ContratoModule } from './modules/contrato/contrato.module';
import { CompartirModule } from './modules/compartir/compartir.module';

@Module({
  imports: [ConfigModule, DatabaseModule, PersonalModule, UsuarioModule, RolModule, FuncionalidadModule, RolFuncionalidadModule, PropietarioModule, CaracteristicaModule, InmuebleCaracteristicaModule, InmuebleModule, UbicacionModule, ClienteModule, ContratoModule, CompartirModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  // static allowedOrigins: string[];
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
    /* AppModule.allowedOrigins = [
      this._configService.get(Configuration.WEBADMIN),
      this._configService.get(Configuration.WEBPUBLIC),
    ];*/
  }
}
