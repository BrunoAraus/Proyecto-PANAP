import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarInformacionNegPage } from './cambiar-informacion-neg.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarInformacionNegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarInformacionNegPageRoutingModule {}
