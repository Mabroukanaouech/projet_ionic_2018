import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController, Loading} from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {MyDayServiceProvider} from '../../providers/my-day-service/my-day-service';
import {FormBuilder ,FormGroup ,Validators} from '@angular/forms';
import {HomePage} from '../home/home';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";



//import { AuthService } from '../../providers/my-day-service/my-day-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
 user= {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,	fb: FormBuilder,private afAuth:AngularFireAuth) {
    this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
async login(user:User){
  try {
    const result= await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
   if (result){
   this.navCtrl.setRoot(MenuPage);
   }
     } 
     catch(e){
       console.error(e);
     }

}
register()
{
  this.navCtrl.push(HomePage);
}

}




  /* login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			); */
	





 

  /* navigateToMenuPage(){
    this.navCtrl.push(MenuPage);
  }
  navigateToHomePage(){
    this.navCtrl.push(HomePage);
  }
  signup(){
    this.navCtrl.push(HomePage);
  } */
 /*  signIn() {
    Parse.User.logIn(this.username, this.email,this.password).then((resp) => {
      console.log('Logged in successfully', resp);

      // If you app has Tabs, set root to TabsPage
      this.navCtrl.setRoot('MenuPage')
    }, err => {
      console.log('Error logging in', err);

      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      }).present();
    });
  } */

 /*  public login() {
    this.showLoading()
    this.service.login(this.profil).subscribe(allowed => {
      if (allowed) {        
        //this.navCtrl.setRoot('MenuPage');
        this.navCtrl.push(MenuPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
   */
  /* showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  } */
 
 /* showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present ();
}
 */
