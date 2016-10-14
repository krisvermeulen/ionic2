import { Component, NgZone } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RandomKittyService } from '../../providers/random-kitty-service';

@Component({
  selector: 'page-random-kitty',
  templateUrl: 'random-kitty.html',
  providers: [ RandomKittyService ]
})
export class RandomKittyPage {

  kittyUrl: string;

  constructor(private navCtrl: NavController, private randomKittyService: RandomKittyService, private zone: NgZone) {
    this.nextKitty();
  }

  nextKitty() {
    this.randomKittyService.getKitty().subscribe(data => {
       this.zone.run(() => { this.kittyUrl = data; });
    });
  }
}
