import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaClientePageRoutingModule } from './mapa-cliente-routing.module';

import { MapaClientePage } from './mapa-cliente.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaClientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [MapaClientePage]
})
export class MapaClientePageModule {}
