import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultsOfSearchPage } from '../pages/results-of-search/results-of-search';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../pages/providers/people-service/people-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [  
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ResultsOfSearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ResultsOfSearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider
  ]
})
export class AppModule {}
