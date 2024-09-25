import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerContraPage } from './restablecer-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerContraPageRoutingModule {}
