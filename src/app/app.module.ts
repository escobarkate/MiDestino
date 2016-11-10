import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {MenuPage} from '../pages/menu/menu';
import {RutaPage} from '../pages/ruta/ruta';
import {RutaPage2} from '../pages/ruta2/ruta2';
import {OrigenPage} from '../pages/origen/origen';
import {DestinoPage} from '../pages/destino/destino';
import {HorarioPage} from '../pages/horario/horario';
import {TiquetePage} from '../pages/tiquete/tiquete';
import {PuestosPage} from '../pages/puestos/puestos';
import {PagoPage} from '../pages/pago/pago';
import {ConfPage} from '../pages/confirmacion/confirmacion';
import {RegistrarPage} from '../pages/registrar/registrar';

import {UsuarioClient} from '../providers/usuario-client';
import {Ciudad} from '../providers/ciudad';
import {Tiquete} from '../providers/tiquete';
import {Trayecto} from '../providers/trayecto';
import {Usuario} from '../providers/usuario';
import {Horario} from '../providers/horario';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RutaPage2,
    LoginPage,
    MenuPage,
    RutaPage,
    OrigenPage,
    DestinoPage,
    HorarioPage,
    PuestosPage,
    PagoPage,ConfPage,RegistrarPage,TiquetePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MenuPage,
    RutaPage,
    RutaPage2,
    OrigenPage,
    DestinoPage,
    HorarioPage,
    PuestosPage,
    PagoPage,ConfPage,RegistrarPage,TiquetePage
  ],
  providers: [UsuarioClient,Horario]
})
export class AppModule {}
