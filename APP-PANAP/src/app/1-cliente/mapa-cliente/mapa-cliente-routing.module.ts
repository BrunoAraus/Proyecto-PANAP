import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaClientePage } from './mapa-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: MapaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaClientePageRoutingModule {}
