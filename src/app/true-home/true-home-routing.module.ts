import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrueHomePage } from './true-home.page';

const routes: Routes = [
  {
    path: '',
    component: TrueHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrueHomePageRoutingModule {}
