
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ConfPage } from '../confirmacion/confirmacion';
import { Usuario } from '../../providers/usuario';
import { Horario } from '../../providers/horario';
import { Tiquete } from '../../providers/tiquete';
import { UsuarioClient } from '../../providers/usuario-client';
import {LoginPage} from '../login/login';


@Component({
  selector: 'pago-home',
  templateUrl: 'pago.html'
})
export class PagoPage {
  viaje: Horario;
  tiquete: Tiquete;
  tiqueteR: Tiquete;
  via:Horario;
  usuario: Usuario;
  usr: Usuario;
   puesto: number;
   horario: number;
   cedula: number;
  // empresa:string;
  // origen:string;
  // destino:string;
  // fecha:string;
  // hora:string;
  // precio:number;
  // modo:string;
  
  
  
  constructor(public navCtrl: NavController, public params: NavParams, private toast: ToastController, private client: UsuarioClient) {
    this.usuario = new Usuario();
    this.usr = new Usuario();
    this.tiquete= new Tiquete();
    this.tiqueteR=new Tiquete();
    this.viaje=new Horario();
    this.via=new Horario();
    this.cedula = this.params.get('id');
    this.usr.cedula= this.params.get('id');
    this.puesto=this.params.get('silla');
    this.horario=this.params.get('idh');
    this.viaje.idhorario=this.params.get('idh');
    console.log(this.cedula,this.puesto,this.horario);
    
  }
  goToConfirmacion() {
    this.navCtrl.setRoot(ConfPage);
    this.navCtrl.push(ConfPage,{tiq:this.tiquete});   
  }
  goToLogin(){
        this.navCtrl.push(LoginPage);
        this.navCtrl.setRoot(LoginPage);
    }

  registrarT(ced:number,nom:string){
    this.tiquete.nombre=nom;
    this.tiquete.cedula=ced;
    this.tiquete.silla=+this.puesto;
    console.log("tiquete "+ this.tiquete);
    
    this.buscarviaje();
  }


   buscarviaje() {
    let msg;
    console.log("entro a buscar viaje y this es " + this.viaje.idhorario);
    this.client.gethora(this.viaje).subscribe((res) => this.processRespo(res[0], res[1]), (err) => this.processResp(false, null));
    
  }

  processRespo(success: boolean, user: Horario) {
    let msg;
    console.log("entro a respo");
    if(success){

    this.via = user;
    console.log(this.via);
    
    this.tiquete.empresa= this.via.empresa;
    this.tiquete.fecha=this.via.vfecha;
    this.tiquete.hora=this.via.vhora;
    this.tiquete.origen=this.via.origen;
    this.tiquete.destino=this.via.destino;
    this.tiquete.precio=this.via.precio;
    this.tiquete.modo="compra";
    this.insertarTiquete(this.tiquete);
    }else
    {
        console.log("success error ");
    }
  
    
  }

  insertarTiquete(tiq: Tiquete){
    console.log("entra a insertar tiquete");
    console.log(this.tiquete);
    
   this.client.insertTiq(this.tiquete).subscribe(
      (res) => this.processResponse(res),
        (err) => this.processResponse(false));
  }

processResponse(success: boolean) {
    let msg;
    //this.tiqueteR = user;
    
    //console.log(user);
    //console.log(this.tiqueteR);
    
    if (success) {
     console.log("Se registro el tiquete");
      this.goToConfirmacion();
     
    } else {
      console.log("no se registro el tiquete");
     
      
    } //msg.present();
  }


  valido() {
    let msg;

    if (this.usuario.nombre == null) {
      msg = this.toast.create({ message: "Ingrese su nombre", duration: 3000 });
    } else {
      if (this.usuario.cedula == null) {
        msg = this.toast.create({ message: "Ingrese su cedula", duration: 3000 });
      } else {
        if (this.usuario.cuenta == null) {
          msg = this.toast.create({ message: "Ingrese su correo", duration: 3000 });
        } else {
          if (this.usuario.password == null) {
            msg = this.toast.create({ message: "Ingrese su clave", duration: 3000 });
          } else {
            this.verificar();
          }

        }
      }
    }
    msg.present();
  }

  verificar() {
    let msg;
    this.client.getUCed(this.usr).subscribe((res) => this.processResp(res[0], res[1]), (err) => this.processResp(false, null));
  }
  processResp(success: boolean, user: Usuario) {
    let msg;
    this.usr = user;
    console.log("Usuario extraido de la BD");
    
    if (success) {
      if (this.usr.nombre == this.usuario.nombre) {
        if (this.usr.cedula == this.usuario.cedula) {
          if (this.usr.cuenta == this.usuario.cuenta) {
            if (this.usr.password == this.usuario.password) {
                this.registrarT(this.usr.cedula,this.usr.nombre);
            }
            else {
              msg = this.toast.create({ message: "¡Datos incorrectos,verifique e intente nuevamente!", duration: 3000 });
            }

          } else
            msg = this.toast.create({ message: "¡Datos incorrectos,verifique e intente nuevamente!", duration: 3000 });

        } else
          msg = this.toast.create({ message: "¡Datos incorrectos,verifique e intente nuevamente!", duration: 3000 });

      } else
        msg = this.toast.create({ message: "¡Datos incorrectos,verifique e intente nuevamente!", duration: 3000 });
      }

      msg.present();
    }
  }