import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarCorreoPage } from './validar-correo.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarCorreoPageRoutingModule {}
