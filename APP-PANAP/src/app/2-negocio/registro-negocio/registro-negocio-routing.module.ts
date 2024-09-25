import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroNegocioPage } from './registro-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroNegocioPageRoutingModule {}
