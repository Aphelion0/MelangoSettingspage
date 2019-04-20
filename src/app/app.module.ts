import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

//import { Camera } from '@ionic-native/camera';

const firebase = {
  apiKey: "AIzaSyBuSTAqrZs8eAiT7pu4BveSF8QP37wkoBo",
  authDomain: "melango-5b3ee.firebaseapp.com",
  databaseURL: "https://melango-5b3ee.firebaseio.com",
  projectId: "melango-5b3ee",
  storageBucket: "melango-5b3ee.appspot.com",
  messagingSenderId: "926445763676"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],  
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
