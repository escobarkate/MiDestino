
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RutaPage } from '../ruta/ruta';
import { UsuarioClient } from '../../providers/usuario-client';
import { Usuario } from '../../providers/usuario';
import { Ciudad } from '../../providers/ciudad';

@Component({
  selector: 'destino-home',
  templateUrl: 'destino.html'
})
export class DestinoPage {
  cedula:number;
  origen:number;
  data: Ciudad[];
  usuario: Usuario;
  constructor(public navCtrl: NavController, public params: NavParams, private client: UsuarioClient) {
    this.cedula= this.params.get('id');
    console.log(this.cedula);
    this.origen= this.params.get('idO');
    console.log(this.origen);
    
    this.data = [];
    this.client.getAllCitys().subscribe((res) => { this.data = res });
  }
  
  
  goToRuta(d: number) {
    //this.usuario.cedula=idU;
    this.navCtrl.setRoot(RutaPage);
    this.navCtrl.push(RutaPage, { id:this.cedula,idO:this.origen,idD:d });
   
  }

}