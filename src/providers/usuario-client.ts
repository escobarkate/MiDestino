import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Usuario} from './usuario';
import {Tiquete} from './tiquete';
import {Ciudad} from './ciudad';
import {Horario} from './horario';
import {Puesto} from './puesto';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the UsuarioClient provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioClient {
  url: string = "http://localhost:3000/midestino";
  urlc: string = "http://localhost:3000/ciudad";
  ur: string = "http://localhost:3000/horario";
  urp: string = "http://localhost:3000/puesto";
  urt: string = "http://localhost:3000/tiquete";


  constructor(public http: Http) {
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get(this.url).map(this.processArray).catch(this.processCatch);
  }
  getAllCitys(): Observable<Ciudad[]> {
    return this.http.get(this.urlc).map(this.processArray).catch(this.processCatch);
  }

  getAllTiquetes(usuario:Tiquete): Observable<Tiquete[]> {
    return this.http.post(this.urt+"/tiquete",usuario).map(this.processArray).catch(this.processCatch);
  }

  getTiquete(): Observable<Tiquete[]> {
    return this.http.get(this.urt+"/tique").map(this.processArray).catch(this.processCatch);

     
  }

  getUsuario(usuario: Usuario): Observable<[boolean,Usuario]> {
    return this.http.post(this.url+ "/login",usuario).map(this.processLogin).catch(this.processCatch);
  }
   getUCed(usuario: Usuario):Observable<[boolean,Usuario]> {
    return this.http.post(this.url+"/cedula",usuario).map(this.processLogin).catch(this.processCatch);
  }
   gethora(viaje:Horario):Observable<[boolean,Horario]> {
    return this.http.post(this.ur+"/hora",viaje).map(this.processLogin).catch(this.processCatch);
  }
  getHorarios(viaje:Horario):Observable<Horario[]> {
    return this.http.post(this.ur+"/horario",viaje).map(this.processArray).catch(this.processCatch);
  }
  getCity(ciudad: Ciudad):Observable<[Ciudad]> {
    return this.http.post(this.url+"/ciudad",ciudad).map(this.processLogin).catch(this.processCatch);
  }
  getSilla(puesto:Puesto, silla:number):Observable<Puesto> {
    puesto.idpuesto=silla;
    return this.http.post(this.urp+"/puesto",puesto).map(this.processLogin).catch(this.processCatch);
  }
  getESilla(puesto:Puesto):Observable<Puesto> {
    return this.http.post(this.urp+"/p",puesto).map(this.processLogin).catch(this.processCatch);
  }
  
  insertTiq(tiq: Tiquete):Observable<boolean> {
    return this.http.post(this.urt+"/",tiq).map(this.process).catch(this.processCatch);
  }
   insert(usuario: Usuario):Observable<boolean> {
    return this.http.post(this.url,usuario).map(this.process).catch(this.processCatch);
  }

  //  getUsu(usuario: Usuario) {
  //    return this.http.get(this.url,usuario.user).map(this.processArray).catch(this.processCatch);
  //  }
  
 
 

private process(res:Response){
  let body= res.json();
  return body.success;
}
  private processArray(res: Response) {
    let body = res.json();
    return body;
  }
  private processLogin(res: Response) {
    let body = res.json();
    console.log(body.success);
    console.log(body.user);
    
    return [body.success,body.user];
  }

  private processCatch() {
    return Observable.throw(true);
  }





}
