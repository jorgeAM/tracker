import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";

import { FirebaseConfig } from '../credentials/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { UsuarioProvider } from '../providers/usuario/usuario';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';

import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    UbicacionProvider
  ]
})
export class AppModule {}
