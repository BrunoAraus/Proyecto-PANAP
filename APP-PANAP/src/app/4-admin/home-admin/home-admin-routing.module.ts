import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdminPage } from './home-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdminPageRoutingModule {}
