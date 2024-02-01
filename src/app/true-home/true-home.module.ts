import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrueHomePageRoutingModule } from './true-home-routing.module';

import { TrueHomePage } from './true-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrueHomePageRoutingModule
  ],
  declarations: [TrueHomePage]
})
export class TrueHomePageModule {}
