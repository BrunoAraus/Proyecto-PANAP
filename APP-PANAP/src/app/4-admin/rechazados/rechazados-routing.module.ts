import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechazadosPage } from './rechazados.page';

const routes: Routes = [
  {
    path: '',
    component: RechazadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechazadosPageRoutingModule {}
