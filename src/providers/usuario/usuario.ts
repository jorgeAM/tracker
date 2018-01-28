import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UsuarioProvider {

  constructor(private afDB: AngularFireDatabase) { }

  verificaUsuario(clave:string){
    clave = clave.toLowerCase();
    return new Promise((resolve, reject) => {
      //retorna un Observable
      this.afDB.object('/usuarios/'+clave).valueChanges()
        .subscribe((data) => {
          if(data){
            console.log(data);
            resolve();
          } else reject();
        });
    });
  }

  guardarStorage(){
    
  }

}
