import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNegocioPage } from './home-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNegocioPageRoutingModule {}
