import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesNegocioPage } from './solicitudes-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesNegocioPageRoutingModule {}
