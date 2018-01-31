import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { UsuarioProvider } from "../usuario/usuario";

@Injectable()
export class UbicacionProvider {

  constructor(
    private geolocation: Geolocation,
  ) { }

  getPosicion(){
    return this.geolocation.watchPosition();
  }

}
