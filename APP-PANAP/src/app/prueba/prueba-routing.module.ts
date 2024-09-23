import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaPage } from './prueba.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaPageRoutingModule {}
