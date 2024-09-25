import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrarSesionNegPage } from './cerrar-sesion-neg.page';

const routes: Routes = [
  {
    path: '',
    component: CerrarSesionNegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrarSesionNegPageRoutingModule {}
