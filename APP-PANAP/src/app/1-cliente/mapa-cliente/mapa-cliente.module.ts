import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaClientePageRoutingModule } from './mapa-cliente-routing.module';

import { MapaClientePage } from './mapa-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaClientePageRoutingModule
  ],
  declarations: [MapaClientePage]
})
export class MapaClientePageModule {}
