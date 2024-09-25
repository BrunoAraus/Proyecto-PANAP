import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasNegocioPage } from './reservas-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasNegocioPageRoutingModule {}
