import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerContraPageRoutingModule } from './restablecer-contra-routing.module';

import { RestablecerContraPage } from './restablecer-contra.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerContraPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RestablecerContraPage]
})
export class RestablecerContraPageModule {}
