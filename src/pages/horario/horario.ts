import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {PuestosPage} from '../puestos/puestos';
import {LoginPage} from '../login/login';
import { Horario } from '../../providers/horario';
import {UsuarioClient} from '../../providers/usuario-client';

@Component({
  selector: 'horario-home',
  templateUrl: 'horario.html'
})
export class HorarioPage {
 viaje: Horario;
 data:Horario[]; 
 bus:number;
 cedula:number;

  constructor(public navCtrl: NavController, public params: NavParams, private client:UsuarioClient) {
  this.viaje=new Horario();
  this.viaje = this.params.get('ruta');
  this.cedula=this.params.get('id')
  console.log("holi ruta"+ this.viaje, this.cedula);
  this.data = [];
  this.client.getHorarios(this.viaje).subscribe((res)=>{this.data = res});
    
  }
  goToPuestos(fecha:string, bus:number,idhorario:number) {
    this.navCtrl.push(PuestosPage,{f:fecha,b:bus,id:this.cedula,idh:idhorario});
    
  }
  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.push(LoginPage);
  
  }

}