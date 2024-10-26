import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarCorreoPageRoutingModule } from './validar-correo-routing.module';

import { ValidarCorreoPage } from './validar-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarCorreoPageRoutingModule
  ],
  declarations: [ValidarCorreoPage]
})
export class ValidarCorreoPageModule {}
