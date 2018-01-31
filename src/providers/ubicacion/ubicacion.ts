import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class UbicacionProvider {

  constructor(
    private geolocation: Geolocation,
  ) { }

  getPosicion(){
    return this.geolocation.watchPosition();
  }

}
