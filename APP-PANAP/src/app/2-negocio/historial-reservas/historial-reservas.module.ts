import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialReservasPageRoutingModule } from './historial-reservas-routing.module';

import { HistorialReservasPage } from './historial-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialReservasPageRoutingModule
  ],
  declarations: [HistorialReservasPage]
})
export class HistorialReservasPageModule {}
