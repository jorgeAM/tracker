import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, Slides, LoadingController, AlertController } from 'ionic-angular';
import { HomePage} from "../home/home";
import { UsuarioProvider } from "../../providers/usuario/usuario";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {
   @ViewChild(Slides) slides: Slides;
   clave:string = "coco-1";

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private usuarioService: UsuarioProvider
  ) {  }

  ngAfterViewInit(){
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress"
  }


  ingresar(){
    this.navCtrl.push(HomePage);
  }

  continuar(){
    this.showLoading();
    this.usuarioService.verificaUsuario(this.clave)
      .then(() => {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      })
      .catch(() => this.showAlert());
  }

  showLoading(){
    let loader = this.loadingCtrl.create({
      content: 'Autenticando...',
      duration: 1500
    });
    loader.present();
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'CLAVE INCORRECTA!',
      subTitle: 'Ingreso clave incorrecta o comuniquese con el administrador',
      buttons : ['OK']
    });
    alert.present();
  }
}
