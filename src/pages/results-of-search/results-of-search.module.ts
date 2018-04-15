import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsOfSearchPage } from './results-of-search';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { PeopleServiceProvider } from '../providers/people-service/people-service';



@NgModule({
  declarations: [
    ResultsOfSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsOfSearchPage),
    IonicPageModule.forChild(PeopleServiceProvider)
    
  ],
})
export class ResultsOfSearchPageModule {}
