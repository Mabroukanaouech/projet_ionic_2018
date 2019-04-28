import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';
import {BirthdayPage} from '../pages/birthday/birthday';
import {TripPage} from '../pages/trip/trip';
import {ExamPage} from '../pages/exam/exam';
import {DiaryPage} from '../pages/diary/diary';
import {MeetingPage} from '../pages/meeting/meeting';
import {LoginPage} from '../pages/login/login';
import { FIREBASE_CONFIG } from './fireBaseconfig';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MyDayServiceProvider } from '../providers/my-day-service/my-day-service';

import { HttpClientModule } from '@angular/common/http';

import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    BirthdayPage,
    TripPage,
    ExamPage,
    DiaryPage,
    MeetingPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,

    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    BirthdayPage,
    TripPage,
    ExamPage,
    DiaryPage,
    MeetingPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyDayServiceProvider,
    AngularFireAuth,
  
  ]
})
export class AppModule {}
