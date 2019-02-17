import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: ProfilePage
//   }
// ];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfilePage
      },
      {
        path: 'profile-settings',
        loadChildren: '../profile-settings/profile-settings.module#ProfileSettingsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
