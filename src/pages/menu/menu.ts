import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import {MyDayServiceProvider} from '../../providers/my-day-service/my-day-service';
import { BirthdayPage } from '../birthday/birthday';
import { MeetingPage } from '../meeting/meeting';
import { TripPage } from '../trip/trip';
import { ExamPage } from '../exam/exam';
import { DiaryPage } from '../diary/diary';
import {HomePage} from '../home/home';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {
  
  birthdayRoot=BirthdayPage;
   examRoot=ExamPage;
   tripRoot=TripPage;
   meetingRoot=MeetingPage;
   diaryRoot=DiaryPage;
  constructor(private toast:ToastController,private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private service:MyDayServiceProvider) {
 
  
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
        this.toast.create({
          message :'welcome ${data,email}',
          duration :3000
      
        }).present();
      }
      else{
        this.toast.create({
          message :'could not found authentification detailes',
          duration :3000
          }).present();
      }
    })
  }

  //methode pour naviger
  navigateToMenuPage(){
    this.navCtrl.push(MenuPage);
  }
  navigateToBirthdayPage(){
    this.navCtrl.push(BirthdayPage);
  }
  navigateToMeetingPage(){
    this.navCtrl.push(MeetingPage);
  }
  navigateToTripPage(){
    this.navCtrl.push(TripPage);
  }
  navigateToExamPage(){
    this.navCtrl.push(ExamPage);
  }
  navigateToDiaryPage(){
    this.navCtrl.push(DiaryPage);
  }
  navigateToHomePage(){
    this.navCtrl.push(HomePage);
  }
}
