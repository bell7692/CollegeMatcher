import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultsOfSearchPage } from '../results-of-search/results-of-search';
//import { ResultsOfSearchPage } from '../results-of-search/results-of-search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  launchResultsPage(){
    this.navCtrl.push(ResultsOfSearchPage);
  }
}
