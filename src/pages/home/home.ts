import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario:any;

  constructor(
    public navCtrl: NavController,
    private afDB: AngularFireDatabase,
    private usuarioService: UsuarioProvider,
    private ubicacionService: UbicacionProvider
  ) {
    this.usuario = this.afDB.object('/usuarios/'+this.usuarioService.clave);
  }

  ionViewDidLoad(){
    this.ubicacionService.getPosicion()
      .subscribe(data => {
        console.log(data);

        this.usuario.update({
          latitud: data.coords.latitude,
          longitud: data.coords.longitude
        });

      });
  }

}
