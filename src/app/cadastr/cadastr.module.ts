import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrPageRoutingModule } from './cadastr-routing.module';

import { CadastrPage } from './cadastr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrPageRoutingModule
  ],
  declarations: [CadastrPage]
})
export class CadastrPageModule {}
