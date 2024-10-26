import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarCodigoContraPageRoutingModule } from './validar-codigo-contra-routing.module';

import { ValidarCodigoContraPage } from './validar-codigo-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarCodigoContraPageRoutingModule
  ],
  declarations: [ValidarCodigoContraPage]
})
export class ValidarCodigoContraPageModule {}
