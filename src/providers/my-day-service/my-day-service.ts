import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/*
  Generated class for the MyDayServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()

export class MyDayServiceProvider {


  public birthListRef=this.db.list<any>('birthdays');
  public diaryListRef=this.db.list<any>('diarys');
  public examListRef=this.db.list<any>('exams');
  public meetingListRef=this.db.list<any>('meetings');
  public tripListRef=this.db.list<any>('trips');

  public profilListRef=this.db.list<any>('profils');

  public inscriListRef=this.db.list<any>('inscriptions');

  constructor(public http: HttpClient ,public db: AngularFireDatabase) {

    console.log('Hello MyDayServiceProvider Provider');
  }
  
  
  addInscription(inscription:any)
  {
    return this.inscriListRef.push(inscription);
  }


  addBirthday(birthday:any)
  {
    return this.birthListRef.push(birthday);
  }

  addDiary(diary:any)
  {
    return this. diaryListRef.push(diary);
  }

  addExam(exam :any)
  {
    return this.examListRef.push(exam);
  }

  addMeeting(meeting :any)
  {
    return this.meetingListRef.push(meeting);
  }
  addTrip(trip :any)
  {
    return this.tripListRef.push(trip);
  }

  getListBirth(){
    return this.birthListRef;
  }
  getListTrip(){
    return this.tripListRef;
  }

  getListExam(){
    return this.examListRef;
  }
  getListDiary(){
    return this.diaryListRef;
  }

  getListMeeting(){
 return this.meetingListRef;
  }

  addProfil(profil:any)
  {
    return this.profilListRef.push(profil);
  }

  updateBirthday(birthday:any){
    return this.birthListRef.update(birthday.Key,birthday);
  }
removeBirthday(birthday:any)
{
  return this.birthListRef.remove(birthday.Key)
}

updateDiary(diary:any){
  return this.diaryListRef.update(diary.Key,diary);
}

removeDiary(diary:any)
{
return this.diaryListRef.remove(diary.Key)
}

removeMeeting(meeting:any)
{
  return this.meetingListRef.remove(meeting.Key)
}

removeTrip(trip:any)
{
  return this.tripListRef.remove(trip.Key)
}
removeExam(exam:any)
{
  return this.examListRef.remove(exam.Key)
}



}