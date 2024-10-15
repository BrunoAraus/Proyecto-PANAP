import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceptadosPageRoutingModule } from './aceptados-routing.module';

import { AceptadosPage } from './aceptados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceptadosPageRoutingModule
  ],
  declarations: [AceptadosPage]
})
export class AceptadosPageModule {}
