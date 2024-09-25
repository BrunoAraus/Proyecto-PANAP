import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoPanNegocioPageRoutingModule } from './ingreso-pan-negocio-routing.module';

import { IngresoPanNegocioPage } from './ingreso-pan-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoPanNegocioPageRoutingModule
  ],
  declarations: [IngresoPanNegocioPage]
})
export class IngresoPanNegocioPageModule {}
