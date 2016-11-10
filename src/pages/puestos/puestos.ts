
import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { LoginPage } from '../login/login';
import { Puesto } from '../../providers/puesto';
import { UsuarioClient } from '../../providers/usuario-client';


@Component({
  selector: 'puestos-home',
  templateUrl: 'puestos.html'
})
export class PuestosPage {
  puesto: Puesto;
  cedula:number;
  data: Puesto;
  silla: number;
  horario:number;
  //color:string = "orange";
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color13: string;
  color14: string;
  color15: string;
  color16: string;
  constructor(public navCtrl: NavController, public params: NavParams, public actionSheetCtrl: ActionSheetController
    , public platform: Platform, private client: UsuarioClient, private toast: ToastController) {
    this.puesto = new Puesto();

    this.puesto.fecha = this.params.get('f');
    this.puesto.idbus = this.params.get('b');
    this.cedula = this.params.get('id');
    this.horario= this.params.get('idh');
    console.log("hola "+ this.cedula + "horario:" +this.horario);
    
    this.client.getSilla(this.puesto, 1).subscribe((res) => this.processResp1(res[0], res[1]));
    this.client.getSilla(this.puesto, 2).subscribe((res) => this.processResp2(res[0], res[1]));
    this.client.getSilla(this.puesto, 3).subscribe((res) => this.processResp3(res[0], res[1]));
    this.client.getSilla(this.puesto, 4).subscribe((res) => this.processResp4(res[0], res[1]));
    this.client.getSilla(this.puesto, 5).subscribe((res) => this.processResp5(res[0], res[1]));
    this.client.getSilla(this.puesto, 6).subscribe((res) => this.processResp6(res[0], res[1]));
    this.client.getSilla(this.puesto, 7).subscribe((res) => this.processResp7(res[0], res[1]));
    this.client.getSilla(this.puesto, 8).subscribe((res) => this.processResp8(res[0], res[1]));
    this.client.getSilla(this.puesto, 9).subscribe((res) => this.processResp9(res[0], res[1]));
    this.client.getSilla(this.puesto, 10).subscribe((res) => this.processResp10(res[0], res[1]));
    this.client.getSilla(this.puesto, 11).subscribe((res) => this.processResp11(res[0], res[1]));
    this.client.getSilla(this.puesto, 12).subscribe((res) => this.processResp12(res[0], res[1]));
    this.client.getSilla(this.puesto, 13).subscribe((res) => this.processResp13(res[0], res[1]));
    this.client.getSilla(this.puesto, 14).subscribe((res) => this.processResp14(res[0], res[1]));
    this.client.getSilla(this.puesto, 15).subscribe((res) => this.processResp15(res[0], res[1]));
    this.client.getSilla(this.puesto, 16).subscribe((res) => this.processResp16(res[0], res[1]));

  }


  Verificar(id: number) {
    console.log(id);
    this.puesto.idpuesto = id;
    this.client.getESilla(this.puesto).subscribe((res) => this.processRes(res[0], res[1]));
  }

  processRes(success: boolean, user: Puesto) {
    let msg;
    if (success) {
      msg = this.toast.create({ message: "Este puesto ya se encuentra ocupado", duration: 3000 });
    } else {
      this.Pagar();

    } msg.present();
  }

  processResp1(success: boolean, user: Puesto) {
    this.color1 = user.estado;
    console.log(this.color1);
  }
  processResp2(success: boolean, user: Puesto) {
    this.color2 = user.estado;
    console.log(this.color2);
  }
  processResp3(success: boolean, user: Puesto) {
    this.color3 = user.estado;
    console.log(this.color3);
  }
  processResp4(success: boolean, user: Puesto) {
    this.color4 = user.estado;
    console.log(this.color4);
  }
  processResp5(success: boolean, user: Puesto) {
    this.color5 = user.estado;
    console.log(this.color5);
  }
  processResp6(success: boolean, user: Puesto) {
    this.color6 = user.estado;
    console.log(this.color6);
  }
  processResp7(success: boolean, user: Puesto) {
    this.color7 = user.estado;
    console.log(this.color7);
  }
  processResp8(success: boolean, user: Puesto) {
    this.color8 = user.estado;
    console.log(this.color8);
  }
  processResp9(success: boolean, user: Puesto) {
    this.color9 = user.estado;
    console.log(this.color9);
  }
  processResp10(success: boolean, user: Puesto) {
    this.color10 = user.estado;
    console.log(this.color10);
  }
  processResp11(success: boolean, user: Puesto) {
    this.color11 = user.estado;
    console.log(this.color11);
  }
  processResp12(success: boolean, user: Puesto) {
    this.color12 = user.estado;
    console.log(this.color12);
  }
  processResp13(success: boolean, user: Puesto) {
    this.color13 = user.estado;
    console.log(this.color13);
  }
  processResp14(success: boolean, user: Puesto) {
    this.color14 = user.estado;
    console.log(this.color14);
  }
  processResp15(success: boolean, user: Puesto) {
    this.color15 = user.estado;
    console.log(this.color15);
  }
  processResp16(success: boolean, user: Puesto) {
    this.color16 = user.estado;
    console.log(this.color16);
  }



  // openMenu() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Albums',
  //     cssClass: 'action-sheets-basic-page',
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         role: 'destructive',
  //         icon: !this.platform.is('ios') ? 'trash' : null,
  //         handler: () => {
  //           console.log('Delete clicked');
  //         }
  //       },
  //       {
  //         text: 'Share',
  //         icon: !this.platform.is('ios') ? 'share' : null,
  //         handler: () => {
  //           console.log('Share clicked');
  //         }
  //       },
  //       {
  //         text: 'Play',
  //         icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
  //         handler: () => {
  //           console.log('Play clicked');
  //         }
  //       },
  //       {
  //         text: 'Favorite',
  //         icon: !this.platform.is('ios') ? 'heart-outline' : null,
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel', // will always sort to be on the bottom
  //         icon: !this.platform.is('ios') ? 'close' : null,
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }


  Pagar() {
    this.navCtrl.push(PagoPage,{id:this.cedula, silla:this.puesto.idpuesto,idh:this.horario});
    console.log("entrego cedula y silla a pagar");
    

  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.push(LoginPage);

  }

}