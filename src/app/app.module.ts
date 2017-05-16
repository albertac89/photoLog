import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ViewPage } from '../pages/view/view';
import { FormPage } from '../pages/form/form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard } from '@ionic-native/keyboard';

import { UserService } from '../services/user/user.service';
import { DataService } from '../services/data/data.service';
import { User } from '../models/user.model';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    LoginPage,
    ViewPage,
    FormPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    LoginPage,
    ViewPage,
    FormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Camera,
    Geolocation,
    UserService,
    User,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
