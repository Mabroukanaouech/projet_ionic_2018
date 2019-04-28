import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyDayServiceProvider} from '../../providers/my-day-service/my-day-service';
import {MenuPage} from '../menu/menu';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { App, MenuController } from 'ionic-angular';
/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {
profil={}
public itemse:Observable<any[]>;

constructor(public navCtrl: NavController, public navParams: NavParams,private service:MyDayServiceProvider) {
 /* this.itemse=this.service.getListExam()
      .snapshotChanges()
      .pipe(
        map(changes=>
        changes.map(c => ({key:c.payload.key, ... c.payload.val() })) 
        ) 
        );*/
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
  }
  addProfil(profil)
{
  this.service.addProfil(profil);
  this.navCtrl.push(ExamPage);
  
}


/*removeExam(exam:any)
{ this.service.removeExam(exam);
  this.navCtrl.push(ExamPage);
}*/
}
