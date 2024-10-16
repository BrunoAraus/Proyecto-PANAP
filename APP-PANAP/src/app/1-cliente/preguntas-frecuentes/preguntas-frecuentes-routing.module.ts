import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasFrecuentesPage } from './preguntas-frecuentes.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasFrecuentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasFrecuentesPageRoutingModule {}
