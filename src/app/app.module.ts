import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import {UserDetailsPage } from '../pages/user-details/user-details';
import {WinesPage } from '../pages/wines/wines';
import { ChuckNorrisFactsPage } from '../pages/chuck-norris-facts/chuck-norris-facts';
import { RandomKittyPage } from '../pages/random-kitty/random-kitty';

import { GithubUsers } from '../providers/github-users';
import { Winesearch } from '../providers/winesearch';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    ChuckNorrisFactsPage,
    RandomKittyPage,
    WinesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    WinesPage,
    ChuckNorrisFactsPage,
    RandomKittyPage
  ],
  providers: [GithubUsers, Winesearch]
})
export class AppModule {}
