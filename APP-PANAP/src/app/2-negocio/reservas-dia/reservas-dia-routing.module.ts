import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasDiaPage } from './reservas-dia.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasDiaPageRoutingModule {}
