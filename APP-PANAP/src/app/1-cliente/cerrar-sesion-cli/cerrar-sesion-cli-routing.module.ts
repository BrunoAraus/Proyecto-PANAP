import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrarSesionCliPage } from './cerrar-sesion-cli.page';

const routes: Routes = [
  {
    path: '',
    component: CerrarSesionCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrarSesionCliPageRoutingModule {}
