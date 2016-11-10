import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {RutaPage} from '../ruta/ruta';
import {TiquetePage} from '../tiquete/tiquete';
import {LoginPage} from '../login/login';
import {Usuario} from '../../providers/usuario';

@Component({
  selector: 'menu-home',
  templateUrl: 'menu.html'
})
export class MenuPage {
 cedula:number;
 modo:string;

 // usuario: Usuario;
  usuario = new Usuario();

  constructor(public navCtrl: NavController, public params: NavParams) {

  this.cedula= this.params.get('id');
   this.usuario.cedula= this.cedula;
    console.log(this.cedula);
    console.log(this.usuario.cedula);
    

  }


    // goToRuta(){
     
    //      this.navCtrl.setRoot(RutaPage);
    //      this.navCtrl.push(RutaPage,{id:this.cedula});
    //  }

   goToRuta(){
         this.navCtrl.setRoot(RutaPage);
         this.navCtrl.push(RutaPage,{id:this.cedula});

     }
  goToLogin(){
        this.navCtrl.push(LoginPage);
        this.navCtrl.setRoot(LoginPage);
    }

    goToTiquete(){
        this.modo="compra";
        
        this.navCtrl.push(TiquetePage,{id:this.cedula,md:this.modo});
    }
    goToReserva(){
        this.modo="reserva";
        
        this.navCtrl.push(TiquetePage,{id:this.cedula,md:this.modo});
    }
   


}