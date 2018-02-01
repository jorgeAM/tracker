import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario:any;
  login:any = LoginPage;
  lat: any;
  lng: any;
  private watch:any;

  constructor(
    public navCtrl: NavController,
    private afDB: AngularFireDatabase,
    private usuarioService: UsuarioProvider,
    private ubicacionService: UbicacionProvider,
  ) {
    if(!this.usuarioService.clave) return
    this.usuario = this.afDB.object('/usuarios/'+this.usuarioService.clave);
  }

  ionViewDidLoad(){
    this.watch = this.ubicacionService.getPosicion()
      .subscribe(data => {
        if(!this.usuarioService.clave) return
        console.log(data);
        this.lat = data.coords.latitude
        this.lng = data.coords.longitude

        this.usuario.update({
          latitud: data.coords.latitude,
          longitud: data.coords.longitude
        });

      });
  }

  salir(){
    this.usuarioService.borrarUsuario();
    this.watch.unsubscribe();
    this.navCtrl.setRoot(this.login);
  }
}
