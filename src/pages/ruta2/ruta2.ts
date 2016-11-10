import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {OrigenPage} from '../origen/origen';
import {DestinoPage} from '../destino/destino';
import {HorarioPage} from '../horario/horario';
import {LoginPage} from '../login/login';
import {MenuPage} from '../menu/menu';
import {Trayecto} from '../../providers/trayecto';

@Component({
  selector: 'ruta2-home',
  templateUrl: 'ruta2.html'
})
export class RutaPage2 {
  try: Trayecto;
  destino:string;
  origen:string;
 

      constructor(public navCtrl: NavController, public params:NavParams) {
        this.try.destino= this.params.get('idD');
          this.try.origen= this.params.get('idO');
           this.destino= this.params.get('idD');
          this.origen= this.params.get('idO');
          console.log(this.destino,this.origen);
         console.log(this.try.destino,this.try.origen);
    }
 
  
 
  
  goToOrigen() {
    this.navCtrl.push(OrigenPage);
    this.navCtrl.setRoot(OrigenPage);
  }
  goToDestino() {
    this.navCtrl.push(DestinoPage);
    this.navCtrl.setRoot(DestinoPage);
  }
   goToHorario() {
    this.navCtrl.push(HorarioPage);
  }
  goToLogin(){
        this.navCtrl.push(LoginPage); 
        this.navCtrl.setRoot(LoginPage);
        
    }
 goToMenu(){
        this.navCtrl.push(MenuPage); 
        this.navCtrl.setRoot(MenuPage);
    }

}