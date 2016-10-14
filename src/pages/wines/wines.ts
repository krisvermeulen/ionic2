import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Winesearch } from '../../providers/winesearch';
import {InAppBrowser} from 'ionic-native';

/*
  Generated class for the Wines page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wines',
  templateUrl: 'wines.html'
})
export class WinesPage {

  wines;
  searchFor;

  constructor(public navCtrl: NavController, private winesearch: Winesearch) {
  }

  searchWines(){
        console.log('search wines ' + this.searchFor);
        this.winesearch.searchWines(this.searchFor).subscribe(result => {
          this.wines = result;
        })
  }

  goToDetails(detailsUrl: string) {
    let browser = new InAppBrowser(detailsUrl, '_system');
    //browser.show();
  }


}
