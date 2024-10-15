import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialReservasPage } from './historial-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialReservasPageRoutingModule {}
