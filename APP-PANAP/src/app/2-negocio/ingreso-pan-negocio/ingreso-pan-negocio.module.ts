import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoPanNegocioPageRoutingModule } from './ingreso-pan-negocio-routing.module';

import { IngresoPanNegocioPage } from './ingreso-pan-negocio.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoPanNegocioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [IngresoPanNegocioPage]
})
export class IngresoPanNegocioPageModule {}
