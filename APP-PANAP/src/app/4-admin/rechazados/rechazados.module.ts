import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechazadosPageRoutingModule } from './rechazados-routing.module';

import { RechazadosPage } from './rechazados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechazadosPageRoutingModule
  ],
  declarations: [RechazadosPage]
})
export class RechazadosPageModule {}
