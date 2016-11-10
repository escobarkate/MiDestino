import { Component, Input } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuarioClient } from '../../providers/usuario-client';
import { Usuario } from '../../providers/usuario';


@Component({
  selector: 'registrar-home',
  templateUrl: 'registrar.html'
})
export class RegistrarPage {

  usuario: Usuario;
  usu: Usuario;
  cedula: boolean;


  constructor(public navCtrl: NavController
    , private client: UsuarioClient
    , private toast: ToastController) {
    this.usuario = new Usuario();
    this.usu = new Usuario();


  }



  goToLogin() {
    this.navCtrl.push(LoginPage);

  }
  save() {

    this.client.insert(this.usuario).subscribe(
      (res) => this.processResponse(res),
      (err) => this.processResponse(false));

  }



  valido() {
    let msg;

    if (this.usuario.nombre == null) {
      msg = this.toast.create({ message: "Por favor ingrese su nombre", duration: 3000 });
    } else {
      if (this.usuario.cedula == null) {
        msg = this.toast.create({ message: "Por favor ingrese su cedula", duration: 3000 });
      } else {
        if (this.usuario.correo == null) {
          msg = this.toast.create({ message: "Por favor ingrese su correo", duration: 3000 });
        } else {
          if (this.usuario.user == null) {
            msg = this.toast.create({ message: " ingrese su nombre de usuario", duration: 3000 });
          } else {
            if (this.usuario.password == null) {
              msg = this.toast.create({ message: "Por favor digite la constraseña deseada", duration: 3000 });
            } else {
              this.verificar();
            }
          }
        }
      }
    }
    msg.present();
  }

  verificar() {
    let msg;
    this.client.getUCed(this.usuario).subscribe((res) => this.processResp(res[0], res[1]), (err) => this.processResp(false, null));
  }

  processResp(success: boolean, user: Usuario) {
    let msg;
    this.usu = user;
    if (success) {
      msg = this.toast.create({ message: "Usted ya se encuentra registrado.Numero de identificación registrado", duration: 3000 });

    } else {
      this.save();
    } msg.present();
  }

  processResponse(success: boolean) {
    let msg;
    if (success) {
      msg = this.toast.create({ message: "Usted se ha registrado con éxito", duration: 3000 });
      this.goToLogin();
    } else {
      msg = this.toast.create({ message: "Nombre de usuario existente, por favor intenta con otro", duration: 3000 });

    } msg.present();
  }
}


