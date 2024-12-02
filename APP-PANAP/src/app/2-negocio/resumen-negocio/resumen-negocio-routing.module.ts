import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenNegocioPage } from './resumen-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenNegocioPageRoutingModule {}
