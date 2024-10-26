import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarCodigoContraPage } from './validar-codigo-contra.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarCodigoContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarCodigoContraPageRoutingModule {}
