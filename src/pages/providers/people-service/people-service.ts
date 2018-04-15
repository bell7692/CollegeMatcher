import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// import {Person} from './PersonInterface';
// import {MockApi} from '../MOCK_DATA';

@Injectable()
export class PeopleServiceProvider {

  url :string = 'https://api.data.gov/ed/collegescorecard/v1/schools/?api_key=';
  apiKey: string = 'BM1LJJGwSQij4D2ECz7iH2qQfBzuZcvcsgjuRdon';
  schoolName:string = "";
  constructor(private http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  getSchoolName(){
    this.schoolName += this.http.get(this.url +this.apiKey + '&fields=school.name');
    console.log(this.schoolName);
  }

   
}