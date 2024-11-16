import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoNegociosPage } from './listado-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoNegociosPageRoutingModule {}
