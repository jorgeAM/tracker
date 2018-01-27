import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {
   @ViewChild(Slides) slides: Slides;
   clave:string = "jalfaro-93";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit(){
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress"
  }


  ingresar(){

  }

  continuar(){
    
  }
}
