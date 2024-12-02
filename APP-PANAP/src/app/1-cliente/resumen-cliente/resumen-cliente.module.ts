import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenClientePageRoutingModule } from './resumen-cliente-routing.module';

import { ResumenClientePage } from './resumen-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenClientePageRoutingModule
  ],
  declarations: [ResumenClientePage]
})
export class ResumenClientePageModule {}
