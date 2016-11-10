import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {RutaPage} from '../ruta/ruta';
import {MenuPage} from '../menu/menu';
import {UsuarioClient} from '../../providers/usuario-client';
import {Usuario} from '../../providers/usuario';

import {Tiquete} from '../../providers/tiquete';

@Component({
  selector: 'tiquete-home',
  templateUrl: 'tiquete.html'
})
export class TiquetePage {
     usuario: Tiquete;
     data: Tiquete[];
     hola:string;
    

  constructor(public navCtrl: NavController, private client:UsuarioClient, public params: NavParams) {
    this.usuario = new Tiquete();
    this.usuario.cedula=this.params.get('id');
    this.usuario.modo=this.params.get('md');
    this.data = [];
    // this.hola=this.params.get('id');
    // console.log(this.hola);
     
    this.client.getAllTiquetes(this.usuario).subscribe((res)=>{this.data = res});
    
    
  }

    goToHome(user:Usuario) {
    this.navCtrl.setRoot(MenuPage);
    this.navCtrl.push(MenuPage,{id:user.cedula});
  }

}