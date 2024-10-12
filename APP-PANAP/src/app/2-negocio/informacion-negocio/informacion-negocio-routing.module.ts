import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionNegocioPage } from './informacion-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionNegocioPageRoutingModule {}
