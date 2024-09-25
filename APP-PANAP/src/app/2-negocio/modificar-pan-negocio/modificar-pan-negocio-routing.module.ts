import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPanNegocioPage } from './modificar-pan-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPanNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPanNegocioPageRoutingModule {}
