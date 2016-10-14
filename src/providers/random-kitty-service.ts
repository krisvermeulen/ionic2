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
export class RandomKittyService {

  private urlRegexp = new RegExp('<url>(.*)<\/url>');

  constructor(public http: Http) {
  }

  getKitty(): Observable<any> {
    return this.http.get(`http://thecatapi.com/api/images/get?api_key=MTI3OTgx&format=xml&type=png&size=medium&results_per_page=1`)
      .map(res => this.urlRegexp.exec(res.text())[1]);
  }
}
