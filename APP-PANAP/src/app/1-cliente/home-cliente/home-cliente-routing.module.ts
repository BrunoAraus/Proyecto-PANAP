import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeClientePage } from './home-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: HomeClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeClientePageRoutingModule {}
