import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PeopleServiceProvider } from '../providers/people-service/people-service';

@IonicPage()
@Component({
  selector: 'page-results-of-search',
  templateUrl: 'results-of-search.html',
})

export class ResultsOfSearchPage {
   //ref = cordova.InAppBrowser.open(url, target, options);

  

  constructor(public http:Http, public navCtrl: NavController) {
 
  }
  ionViewDidLoad(){
     
    }

    launchResultsPage(){
      this.navCtrl.push(InAppBrowser);
    }
  }
    
  //    api = 'https://api.data.gov/ed/collegescorecard/v1/schools/?api_key=';
  //    apiKey = 'BM1LJJGwSQij4D2ECz7iH2qQfBzuZcvcsgjuRdon';
  //    zip = select;
  //    distance = '';
  //    fields = 'school.name,school.school_url,2015.student.size,2014.completion.title_iv.completed_by.4yrs';

  //    getUrl(zipCode: string, distance: number):any{
  //      URL = this.api + this.apiKey +'&zip='+ this.zip +"&distance=" +this.distance
  //      +'&fields='+this.fields;
  //     return url;

  //    }
//}




//-------




