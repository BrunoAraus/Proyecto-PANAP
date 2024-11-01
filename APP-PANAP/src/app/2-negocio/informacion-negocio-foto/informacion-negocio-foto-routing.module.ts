import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionNegocioFotoPage } from './informacion-negocio-foto.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionNegocioFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionNegocioFotoPageRoutingModule {}
