import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebasApiPage } from './pruebas-api.page';

const routes: Routes = [
  {
    path: '',
    component: PruebasApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebasApiPageRoutingModule {}
