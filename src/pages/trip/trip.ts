import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyDayServiceProvider  } from '../../providers/my-day-service/my-day-service';
import {MenuPage} from '../menu/menu';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { App, MenuController } from 'ionic-angular';
/**
 * Generated class for the TripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class TripPage {
trip={}
 
public itemst:Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:MyDayServiceProvider) {
    this.itemst=this.service.getListTrip()
    .snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c => ({key:c.payload.key, ... c.payload.val() })) 
      ) 
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripPage');
  }

  addTrip(trip)
{
  this.service.addTrip(trip );
  this.navCtrl.push(TripPage);
 
}

removeTrip(trip:any)
{ this.service.removeTrip(trip);
  this.navCtrl.push(TripPage);
}

}
