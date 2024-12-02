import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenClientePage } from './resumen-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenClientePageRoutingModule {}
