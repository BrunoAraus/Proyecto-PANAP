import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoPanNegocioPage } from './ingreso-pan-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoPanNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoPanNegocioPageRoutingModule {}
