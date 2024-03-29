import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {MenuPage} from '../pages/menu/menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage =LoginPage ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  /* initializeApp() {
   
    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.navCtrl.push(HomePage);;
          } else {
            this.navCtrl.push(LoginPage);
          }
        },
        () => {
          this.navCtrl.push(LoginPage);
        }
      );
  } */
/*   login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }
  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  } */
}

