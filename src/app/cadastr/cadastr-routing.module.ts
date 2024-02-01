import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrPage } from './cadastr.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrPageRoutingModule {}
