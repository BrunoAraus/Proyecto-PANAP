import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuClientePage } from './menu-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: MenuClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuClientePageRoutingModule {}
