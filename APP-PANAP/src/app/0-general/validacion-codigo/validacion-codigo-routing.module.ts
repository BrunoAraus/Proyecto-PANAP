import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidacionCodigoPage } from './validacion-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: ValidacionCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidacionCodigoPageRoutingModule {}
