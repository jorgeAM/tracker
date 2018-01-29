import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map:any;

  constructor(
    public navCtrl: NavController,
    private ubicacionService: UbicacionProvider
  ) { }

  ionViewDidLoad(){
    this.ubicacionService.getPosicion();
  }

}
