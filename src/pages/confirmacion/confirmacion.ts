import { Component } from '@angular/core';
import { NavController,NavParams,ToastController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {MenuPage} from '../menu/menu';
import {LoginPage} from '../login/login';
import {UsuarioClient} from '../../providers/usuario-client';
import { Tiquete} from '../../providers/tiquete';


@Component({
  selector: 'confirmacion-home',
  templateUrl: 'confirmacion.html'
})
export class ConfPage {
  tiquete: Tiquete;
   data: Tiquete[];

  constructor(public navCtrl: NavController,public params: NavParams, private toast: ToastController, private client: UsuarioClient) {
     this.tiquete =new Tiquete();
     
     this.data = [];
    this.client.getTiquete().subscribe((res)=>{this.data = res});
  }
  goToMenu() {
    this.navCtrl.push(MenuPage);

  }
  goToLogin() {
    this.navCtrl.push(LoginPage);

  }

}