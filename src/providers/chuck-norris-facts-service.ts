import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';

/*
  Generated class for the ChuckNorrisFactsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChuckNorrisFactsService {

  constructor(public http: Http) {
  }

  getFacts(count: number): Observable<any> {
    return this.http.get(`http://api.icndb.com/jokes/random/${count}?limitTo=[nerdy]`)
      .map(res => res.json().value);
  }
}
