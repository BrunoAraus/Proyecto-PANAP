import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNegocioPage } from './menu-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNegocioPageRoutingModule {}
