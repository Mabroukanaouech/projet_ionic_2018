import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder ,FormGroup ,Validators} from '@angular/forms';
import {LoginPage} from '../login/login';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
	form: FormGroup;
user={} as User;
  constructor(public navCtrl: NavController,fb: FormBuilder,private afAuth:AngularFireAuth)
   {
    this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  
async register(user:User){
  try {
 const result= await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
 if(result){
  this.navCtrl.push(LoginPage);
 }
  } 
  catch(e){
    console.error(e);
  }

}


  navigateToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}

//   signup() {
// 		let data = this.form.value;
// 		let credentials = {
// 			email: data.email,
// 			password: data.password
// 		};
// 		this.auth.signUp(credentials).then(
// 			() => this.navCtrl.setRoot(HomePage),
// 			error => this.signupError = error.message
// 		);
// }

  

 /* makeAcount(profil:any)
  {
    this.service.addAcount(profil);
    this.navCtrl.push(LoginPage);
  
  } */


