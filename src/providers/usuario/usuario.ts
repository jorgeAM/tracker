import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

@Injectable()
export class UsuarioProvider {
  clave:string;

  constructor(
    private platform: Platform,
    private afDB: AngularFireDatabase,
    private storage: Storage
  ) { }

  verificaUsuario(clave:string){
    clave = clave.toLowerCase();
    return new Promise((resolve, reject) => {
      //retorna un Observable
      this.afDB.object('/usuarios/'+clave).valueChanges()
        .subscribe((data) => {
          if(data){
            console.log(data);
            this.guardarStorage(clave);
            resolve();
          } else reject();
        });
    });
  }

  guardarStorage(data:string){
    if(this.platform.is('cordova')) this.storage.set('clave', {user: data});
    else localStorage.setItem('clave', data);
  }

  cargarStorage(){
    if(this.platform.is('cordova')){
      this.storage.get('clave')
        .then(data => {
          console.log(data)
          this.clave = data;
        }).catch(err => console.log('hubo un error: ',err));
      }else {
        this.clave = localStorage.getItem('clave');
      }
  }

  borrarUsuario(){
    this.clave = null;
    this.guardarStorage(this.clave);
  }
}
