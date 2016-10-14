import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the Winesearch provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Winesearch {

  wineSearchApiUrl = 'http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=5da784429cd0ce4175f9ab8e894ddaf9&';

  constructor(public http: Http) {
    console.log('Hello Winesearch Provider');
  }

  searchWines(searchFor: string): Observable<any> {
      return this.http.get(`${this.wineSearchApiUrl}search=${searchFor}`)
        .map(res => res.json().Products.List);
  }

}
