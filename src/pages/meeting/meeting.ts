import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyDayServiceProvider} from '../../providers/my-day-service/my-day-service';
import {MenuPage} from '../menu/menu';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { App, MenuController } from 'ionic-angular';
/**
 * Generated class for the MeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
meeting={}

public itemsm:Observable<any[]>;
constructor(public navCtrl: NavController, public navParams: NavParams,private service:MyDayServiceProvider) {

  this.itemsm=this.service.getListMeeting()
      .snapshotChanges()
      .pipe(
        map(changes=>
        changes.map(c => ({key:c.payload.key, ... c.payload.val() })) 
        ) 
        );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingPage');
  }

  addMeeting(meeting)
  {
    this.service.addMeeting(meeting);
    this.navCtrl.push(MeetingPage);
  }
  removeMeeting(meeting:any)
{ this.service.removeMeeting(meeting);
  this.navCtrl.push(MeetingPage);
}
}
