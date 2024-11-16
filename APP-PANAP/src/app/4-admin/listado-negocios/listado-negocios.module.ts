import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoNegociosPageRoutingModule } from './listado-negocios-routing.module';

import { ListadoNegociosPage } from './listado-negocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoNegociosPageRoutingModule
  ],
  declarations: [ListadoNegociosPage]
})
export class ListadoNegociosPageModule {}
