import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroClientePage } from './registro-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroClientePageRoutingModule {}
