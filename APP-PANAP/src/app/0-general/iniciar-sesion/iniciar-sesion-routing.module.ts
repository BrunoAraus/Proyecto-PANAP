import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarSesionPage } from './iniciar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarSesionPageRoutingModule {}
