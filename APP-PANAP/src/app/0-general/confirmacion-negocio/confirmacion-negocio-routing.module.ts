import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionNegocioPage } from './confirmacion-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionNegocioPageRoutingModule {}
