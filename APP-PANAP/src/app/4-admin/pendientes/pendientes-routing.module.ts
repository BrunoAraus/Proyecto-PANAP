import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendientesPage } from './pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: PendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendientesPageRoutingModule {}
