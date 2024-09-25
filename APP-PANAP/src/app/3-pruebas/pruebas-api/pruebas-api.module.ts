import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebasApiPageRoutingModule } from './pruebas-api-routing.module';

import { PruebasApiPage } from './pruebas-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebasApiPageRoutingModule
  ],
  declarations: [PruebasApiPage]
})
export class PruebasApiPageModule {}
