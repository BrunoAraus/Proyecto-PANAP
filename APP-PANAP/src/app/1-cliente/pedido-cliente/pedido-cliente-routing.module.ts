import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoClientePage } from './pedido-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoClientePageRoutingModule {}
