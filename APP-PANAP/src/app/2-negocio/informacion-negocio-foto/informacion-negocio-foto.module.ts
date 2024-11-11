import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionNegocioFotoPageRoutingModule } from './informacion-negocio-foto-routing.module';

import { InformacionNegocioFotoPage } from './informacion-negocio-foto.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionNegocioFotoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [InformacionNegocioFotoPage]
})
export class InformacionNegocioFotoPageModule {}
