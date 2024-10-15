import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrarSesionAdmPage } from './cerrar-sesion-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CerrarSesionAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrarSesionAdmPageRoutingModule {}
