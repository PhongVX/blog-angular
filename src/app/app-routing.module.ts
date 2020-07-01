import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {NewFeedComponent} from './pages/new-feed/new-feed.component'
import {PersonalProfileComponent} from './pages/personal-profile/personal-profile.component'

const routes: Routes = [
  { path: '', component: NewFeedComponent },
  { path: 'profile', component: PersonalProfileComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
