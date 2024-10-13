import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionCodigoPageRoutingModule } from './validacion-codigo-routing.module';

import { ValidacionCodigoPage } from './validacion-codigo.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacionCodigoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ValidacionCodigoPage]
})
export class ValidacionCodigoPageModule {}
