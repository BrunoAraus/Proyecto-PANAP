import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceptadosPage } from './aceptados.page';

const routes: Routes = [
  {
    path: '',
    component: AceptadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceptadosPageRoutingModule {}
