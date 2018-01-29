import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";

import { UsuarioProvider } from "../providers/usuario/usuario";

import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private userService: UsuarioProvider,
    public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      this.userService.cargarStorage();
      this.userService.clave ?  this.rootPage = HomePage : this.rootPage = LoginPage
      this.presentToast(this.userService.clave);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  presentToast(msj:string) {
    let toast = this.toastCtrl.create({
      message: 'cadena: '+msj,
      duration: 3000
    });
    toast.present();
  }


}
