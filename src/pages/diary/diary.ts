import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyDayServiceProvider} from '../../providers/my-day-service/my-day-service';
import {MenuPage} from '../menu/menu';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { App, MenuController } from 'ionic-angular';

/**
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class DiaryPage {
diary={}
public itemsd:Observable<any[]>;
  constructor(public navCtrl: NavController,menu: MenuController, public navParams: NavParams,private service:MyDayServiceProvider) {
    this.itemsd=this.service.getListDiary()
    .snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c => ({key:c.payload.key, ... c.payload.val() })) 
      ) 
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaryPage');
  }

  addDiary(diary)
  {
    this.service.addDiary(diary);
    this.navCtrl.push(DiaryPage);
  }

  removeDiary(diary:any)
{ this.service.removeDiary(diary);
  this.navCtrl.push(DiaryPage);
}
}
