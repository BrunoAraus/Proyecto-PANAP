import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionNegocioFotoPageRoutingModule } from './informacion-negocio-foto-routing.module';

import { InformacionNegocioFotoPage } from './informacion-negocio-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionNegocioFotoPageRoutingModule
  ],
  declarations: [InformacionNegocioFotoPage]
})
export class InformacionNegocioFotoPageModule {}
