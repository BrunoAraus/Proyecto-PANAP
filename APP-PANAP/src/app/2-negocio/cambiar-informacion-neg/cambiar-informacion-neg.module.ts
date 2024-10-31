import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarInformacionNegPageRoutingModule } from './cambiar-informacion-neg-routing.module';

import { CambiarInformacionNegPage } from './cambiar-informacion-neg.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarInformacionNegPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CambiarInformacionNegPage]
})
export class CambiarInformacionNegPageModule {}
