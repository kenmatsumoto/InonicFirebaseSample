import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TaskListPage } from '../pages/tasklist/tasklist';

import { MyApp } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDqhYkuzS5Y2uQWSibvVv1tVVVqTRC04gY",
  authDomain: "ionic2do-98a4b.firebaseapp.com",
  databaseURL: "https://ionic2do-98a4b.firebaseio.com",
  projectId: "ionic2do-98a4b",
  storageBucket: "ionic2do-98a4b.appspot.com",
  messagingSenderId: "447499146084"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
