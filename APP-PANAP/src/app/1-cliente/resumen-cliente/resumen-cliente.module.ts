import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenClientePageRoutingModule } from './resumen-cliente-routing.module';

import { ResumenClientePage } from './resumen-cliente.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenClientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ResumenClientePage]
})
export class ResumenClientePageModule {}
