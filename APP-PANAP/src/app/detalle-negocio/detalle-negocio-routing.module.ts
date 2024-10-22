import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNegocioPage } from './detalle-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleNegocioPageRoutingModule {}
