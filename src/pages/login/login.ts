import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {RegistrarPage} from '../registrar/registrar';
import {Usuario} from '../../providers/usuario';
import {UsuarioClient} from '../../providers/usuario-client';

@Component({
  selector: 'login-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  usuario: Usuario;
  usu: Usuario;
  usuarioo: string;
  contraseña: string;

  constructor(public navCtrl: NavController
    , private client: UsuarioClient
    , private toast: ToastController) {
    this.usuario = new Usuario();
    this.usu = new Usuario(); 
    
  }

  validar() {
    let msg;
    if (this.usuario.user == null) {
      msg = this.toast.create({ message: "Digite su nombre de usuario", duration: 3000 });
    } else {
      if (this.usuario.password == null) {
        msg = this.toast.create({ message: "Digite su contraseña", duration: 3000 });
      }else{
        this.verificar();
      }

    }
    msg.present();

  }

  verificar() {
    let msg;
    this.client.getUsuario(this.usuario).subscribe((res) =>  this.processResp(res[0], res[1]),(err)=>  this.processResp(false,null)
      //  if (res) {
      //   msg = this.toast.create({ message: "Usuario autenticado", duration: 3000 });
      //   }else{
      //     msg = this.toast.create({ message: "si se pudo", duration: 3000 });
      //   }
      //  msg.present();               ------------------------
    );
     }
    // this.usuarioo=this.usu.user;
    // this.contraseña=this.usu.password;
    // if(this.usuarioo== this.usuario.user && this.contraseña==this.usuario.password){
    //   msg = this.toast.create({ message: "coincide ", duration: 3000 });
    // }
    // else{
    //   msg = this.toast.create({ message: " consulta "+ this.usu.user +" enviado "+ this.usuario.user, duration: 3000 });
    // }
    // msg.present();
  


  processResp(success: boolean, user:Usuario) {
    let msg;
    this.usu=user;
    if (success) {
      //msg = this.toast.create({ message: "Bienvenido!", duration: 3000 });
      this.goToHome(this.usu);
    } else {
      msg = this.toast.create({ message: "No se ha podido iniciar sesión,favor verifique sus datos", duration: 3000 });
    } msg.present();
  }


  goToHome(user:Usuario) {
    this.navCtrl.setRoot(MenuPage);
    this.navCtrl.push(MenuPage,{id:user.cedula});
  }
  goToRegistrar() {
    this.navCtrl.push(RegistrarPage);

  }

}