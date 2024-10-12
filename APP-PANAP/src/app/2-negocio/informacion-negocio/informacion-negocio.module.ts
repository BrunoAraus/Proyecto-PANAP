import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionNegocioPageRoutingModule } from './informacion-negocio-routing.module';

import { InformacionNegocioPage } from './informacion-negocio.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionNegocioPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [InformacionNegocioPage]
})
export class InformacionNegocioPageModule {}
