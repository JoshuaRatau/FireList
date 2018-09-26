import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2'
import { initializeApp } from '../../node_modules/firebase';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

var FirebaseConfig = {
  apiKey: "AIzaSyD7cQn4KoOfdr_-bVv-SmsDS-p2mA1e9qQ",
  authDomain: "firelist-10ae7.firebaseapp.com",
  databaseURL: "https://firelist-10ae7.firebaseio.com",
  projectId: "firelist-10ae7",
  storageBucket: "firelist-10ae7.appspot.com",
  messagingSenderId: "54563263506"
};







@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
