import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { ChuckNorrisFactsPage } from '../pages/chuck-norris-facts/chuck-norris-facts';
import { RandomKittyPage } from '../pages/random-kitty/random-kitty';

import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    ChuckNorrisFactsPage,
    RandomKittyPage
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
    ChuckNorrisFactsPage,
    RandomKittyPage
  ],
  providers: [
    GithubUsers
  ]
})
export class AppModule {}
