import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ChuckNorrisFactsService } from '../../providers/chuck-norris-facts-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'chuck-norris-facts.html',
  providers: [ ChuckNorrisFactsService ]
})
export class ChuckNorrisFactsPage {

  facts: Array<any>;

  constructor(private navCtrl: NavController, private chuckNorrisFactsService: ChuckNorrisFactsService) {
    this.chuckNorrisFactsService.getFacts(10).subscribe(data => this.facts = data);
  }

}
