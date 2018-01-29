import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsuarioProvider } from "../usuario/usuario";

@Injectable()
export class UbicacionProvider {
  usuario: any;

  constructor(
    private geolocation: Geolocation,
    private afDB: AngularFireDatabase,
    private usuarioService: UsuarioProvider
  ) {
    this.usuario = this.afDB.object('usuarios/'+this.usuarioService.clave)
  }

  getPosicion():any{
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data);
      this.usuario.update({
        latitud: data.coords.latitude,
        longitud: data.coords.longitude
      })
    });
  }

}
