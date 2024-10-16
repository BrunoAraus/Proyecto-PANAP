import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarInformacionNegPageRoutingModule } from './cambiar-informacion-neg-routing.module';

import { CambiarInformacionNegPage } from './cambiar-informacion-neg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarInformacionNegPageRoutingModule
  ],
  declarations: [CambiarInformacionNegPage]
})
export class CambiarInformacionNegPageModule {}
