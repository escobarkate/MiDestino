import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OrigenPage } from '../origen/origen';
import { DestinoPage } from '../destino/destino';
import { HorarioPage } from '../horario/horario';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { Trayecto } from '../../providers/trayecto';
import { Horario } from '../../providers/horario';
import { Ciudad } from '../../providers/ciudad';

//import {Usuario} from '../../usuario/usuario';

@Component({
  selector: 'ruta-home',
  templateUrl: 'ruta.html'
})
export class RutaPage {
  try: Trayecto;
  //usuario = new Usuario();
  viaje: Horario;
  cedula: number;
  origen: number;
  destino: number;
  fecha: string;
  Ciudad:Ciudad;



  constructor(public navCtrl: NavController, public params: NavParams, private toast: ToastController) {
    this.viaje = new Horario();
    this.cedula = this.params.get('id');
    console.log(this.cedula);
    this.origen = this.params.get('idO');
     
    console.log(this.origen);
    this.destino = this.params.get('idD');
    console.log(this.destino);
  }

  trayec(){
    if(this.origen==1 && this.destino==2){
      this.viaje.vidTry=8;
    }
    if(this.origen==1 && this.destino==3){
      this.viaje.vidTry=9;
    }
    if(this.origen==2 && this.destino==1){
      this.viaje.vidTry=10;
    }
    if(this.origen==2 && this.destino==3){
      this.viaje.vidTry=11;
    }
    if(this.origen==3 && this.destino==1){
      this.viaje.vidTry=12;
    }
    if(this.origen==3 && this.destino==2){
      this.viaje.vidTry=13;
    }

  }

  verificar() {
    let msg;
    if (this.origen == null) {
      msg = this.toast.create({ message: "Debe seleccionar un origen para su viaje,para hacerlo presione la flecha azul", duration: 3000 });
    } else {
      if (this.destino == null) {
        msg = this.toast.create({ message: "Debe seleccionar un destino para su viaje,para hacerlo presione la flecha verde", duration: 3000 });
      } else {
        if (this.origen == this.destino) {
          msg = this.toast.create({ message: "Ha seleccionado el mismo origen y destino,verifique la ruta", duration: 3000 });
        } else {
          if (this.viaje.vfecha == null) {
            msg = this.toast.create({ message: "Debe seleccionar una fecha para su Viaje", duration: 3000 });
          }
          else {
            this.trayec();
            this.goToHorario();
          }
        }
      }
    }
    msg.present();
  }

  goToOrigen() {
    this.navCtrl.setRoot(OrigenPage);
    this.navCtrl.push(OrigenPage, { id: this.cedula, idD: this.destino });

  }
  goToDestino() {
    this.navCtrl.setRoot(DestinoPage);
    this.navCtrl.push(DestinoPage, { id: this.cedula, idO: this.origen });
  }
  goToHorario() {
    this.navCtrl.push(HorarioPage, { ruta :this.viaje,id:this.cedula });
    console.log(this.viaje);
    
  }
  goToLogin() {
    this.navCtrl.push(LoginPage);
    this.navCtrl.setRoot(LoginPage);

  }
  goToMenu() {
    this.navCtrl.push(MenuPage);
    this.navCtrl.setRoot(MenuPage);
  }

}