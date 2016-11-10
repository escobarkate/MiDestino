
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {RutaPage} from '../ruta/ruta';
import {UsuarioClient} from '../../providers/usuario-client';
import {Usuario} from '../../providers/usuario';
import {Ciudad} from '../../providers/ciudad';

@Component({
  selector: 'origen-home',
  templateUrl: 'origen.html'
})
export class OrigenPage {
     cedula:number;
     destino:number;
     data: Ciudad[];

  constructor(public navCtrl: NavController, public params: NavParams, private client:UsuarioClient) {
    this.cedula= this.params.get('id');
    console.log(this.cedula);
    this.destino= this.params.get('idD');
    console.log(this.destino);
    
    this.data = [];
    this.client.getAllCitys().subscribe((res)=>{this.data = res});
    
    
  }

  goToRuta(o:number){
        this.navCtrl.setRoot(RutaPage);
        this.navCtrl.push(RutaPage,{id:this.cedula,idO:o,idD:this.destino}); 
        
        
    }

}