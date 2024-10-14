import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionNegocioPageRoutingModule } from './confirmacion-negocio-routing.module';

import { ConfirmacionNegocioPage } from './confirmacion-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionNegocioPageRoutingModule
  ],
  declarations: [ConfirmacionNegocioPage]
})
export class ConfirmacionNegocioPageModule {}
