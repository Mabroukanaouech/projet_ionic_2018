import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyDayServiceProvider} from '../../providers/my-day-service/my-day-service';
import {MenuPage} from '../menu/menu';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { App, MenuController } from 'ionic-angular';

/**
 * Generated class for the BirthdayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-birthday',
  templateUrl: 'birthday.html',
})
export class BirthdayPage {
birthday={}
inscription={}
public items:Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,menu: MenuController,private service:MyDayServiceProvider) {
    menu.enable(true);
    this.items=this.service.getListBirth()
    .snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c => ({key:c.payload.key, ... c.payload.val() })) 
      ) 
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BirthdayPage');
  }
  addBirthday(birthday:any)
{
  this.service.addBirthday(birthday);
  this.navCtrl.push(BirthdayPage);
  

}
addInscription(inscription:any)
{
  this.service.addInscription(inscription);
  this.navCtrl.push(BirthdayPage);
  

}
updateBirthday(birthday)
{
  this.service.updateBirthday(birthday);
}
  
removeBirthday(birthday:any)
{ this.service.removeBirthday(birthday);
  this.navCtrl.push(BirthdayPage);
}


}
